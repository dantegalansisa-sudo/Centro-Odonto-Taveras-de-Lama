import { useEffect, useState, useCallback, type FormEvent } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase, MEDIA_BUCKET } from '../supabase/client';

/* ───────────────────────────────────────────────────────────
   PANEL DE ADMINISTRACIÓN — Centro Odontológico Taveras de Lama
   Ruta: /admin  ·  Login con email/contraseña (Supabase Auth)
   ─────────────────────────────────────────────────────────── */

const COUNTRIES = [
  { value: 'do', label: 'República Dominicana' },
  { value: 'us', label: 'Estados Unidos' },
  { value: 'es', label: 'España' },
  { value: 'fr', label: 'Francia' },
  { value: 'cu', label: 'Cuba' },
  { value: 'pr', label: 'Puerto Rico' },
];

async function uploadFile(file: File, folder: string): Promise<string> {
  const ext = (file.name.split('.').pop() || 'bin').toLowerCase();
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await supabase.storage.from(MEDIA_BUCKET).upload(path, file, { upsert: false });
  if (error) throw error;
  return supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path).data.publicUrl;
}

function baseName(filename: string) {
  return filename.replace(/\.[^.]+$/, '');
}

/* ═══════ GESTOR DE MEDIOS (galería y videos comparten estructura) ═══════ */
interface MediaRow { id: string; sort: number; title: string | null; url?: string; src?: string }
function MediaManager({ table, field, folder, accept, isVideo, addLabel, hint, emptyLabel, itemWord }: {
  table: 'gallery_images' | 'videos';
  field: 'url' | 'src';
  folder: string;
  accept: string;
  isVideo: boolean;
  addLabel: string;
  hint: string;
  emptyLabel: string;
  itemWord: string;
}) {
  const [items, setItems] = useState<MediaRow[]>([]);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');

  const load = useCallback(async () => {
    const { data } = await supabase.from(table).select('*').order('sort', { ascending: true });
    setItems((data as MediaRow[]) || []);
  }, [table]);
  useEffect(() => { load(); }, [load]);

  const onUpload = async (e: { currentTarget: HTMLInputElement }) => {
    const files = e.currentTarget.files;
    if (!files || !files.length) return;
    setBusy(true); setMsg('');
    try {
      let base = Date.now();
      for (const file of Array.from(files)) {
        const publicUrl = await uploadFile(file, folder);
        await supabase.from(table).insert({ [field]: publicUrl, title: baseName(file.name), sort: base++ });
      }
      await load();
      setMsg(`✓ ${itemWord}(s) subido(s) correctamente`);
    } catch (err) { setMsg('Error: ' + (err as Error).message); }
    setBusy(false);
    e.currentTarget.value = '';
  };

  const saveTitle = async (id: string, title: string) => {
    await supabase.from(table).update({ title }).eq('id', id);
  };

  const move = async (index: number, dir: -1 | 1) => {
    const j = index + dir;
    if (j < 0 || j >= items.length) return;
    const a = items[index], b = items[j];
    await supabase.from(table).update({ sort: b.sort }).eq('id', a.id);
    await supabase.from(table).update({ sort: a.sort }).eq('id', b.id);
    await load();
  };

  const remove = async (id: string) => {
    if (!confirm(`¿Seguro que quieres ELIMINAR este ${itemWord}? Esta acción no se puede deshacer.`)) return;
    await supabase.from(table).delete().eq('id', id);
    await load();
  };

  return (
    <div className="admin-panel">
      <div className="admin-row">
        <label className="admin-btn admin-btn--primary">
          {busy ? 'Subiendo…' : addLabel}
          <input type="file" accept={accept} multiple hidden disabled={busy} onChange={onUpload} />
        </label>
        {msg && <span className="admin-msg">{msg}</span>}
      </div>
      <p className="admin-hint">{hint} · Tienes <strong>{items.length}</strong> {itemWord}(s). No hay límite, puedes agregar los que quieras.</p>

      {!items.length ? (
        <p className="admin-empty">{emptyLabel}</p>
      ) : (
        <div className="admin-grid">
          {items.map((it, i) => (
            <div key={it.id} className="admin-mediacard">
              {isVideo
                ? <video src={it[field]} className="admin-thumb admin-thumb--video" muted playsInline preload="metadata" />
                : <img src={it[field]} alt="" className="admin-thumb" />}
              <input
                className="admin-input admin-mediacard__title"
                defaultValue={it.title || ''}
                placeholder="Nombre para identificarla"
                onBlur={(e) => saveTitle(it.id, e.target.value)}
              />
              <div className="admin-mediacard__actions">
                <div className="admin-move">
                  <button title="Subir" disabled={i === 0} onClick={() => move(i, -1)}>▲</button>
                  <button title="Bajar" disabled={i === items.length - 1} onClick={() => move(i, 1)}>▼</button>
                </div>
                <button className="admin-btn admin-btn--danger" onClick={() => remove(it.id)}>🗑 Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════ RESEÑAS ═══════ */
interface ReviewRow { id: string; name: string; text: string; rating: number; country: string; sort: number; }
function ReviewManager() {
  const [items, setItems] = useState<ReviewRow[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [country, setCountry] = useState('do');
  const [msg, setMsg] = useState('');

  const load = useCallback(async () => {
    const { data } = await supabase.from('reviews').select('*').order('sort', { ascending: true });
    setItems((data as ReviewRow[]) || []);
  }, []);
  useEffect(() => { load(); }, [load]);

  const add = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setMsg('');
    const { error } = await supabase.from('reviews').insert({ name: name.trim(), text: text.trim(), rating, country, sort: Date.now() });
    if (error) { setMsg('Error: ' + error.message); return; }
    setName(''); setText(''); setRating(5); setCountry('do');
    await load();
    setMsg('✓ Reseña agregada');
  };

  const remove = async (id: string) => {
    if (!confirm('¿Seguro que quieres ELIMINAR esta reseña?')) return;
    await supabase.from('reviews').delete().eq('id', id);
    await load();
  };

  return (
    <div className="admin-panel">
      <form className="admin-form" onSubmit={add}>
        <h3 className="admin-subtitle">Agregar una reseña nueva</h3>
        <input className="admin-input" placeholder="Nombre de la persona" value={name} onChange={(e) => setName(e.target.value)} />
        <textarea className="admin-input" placeholder="Texto de la reseña" rows={3} value={text} onChange={(e) => setText(e.target.value)} />
        <div className="admin-row">
          <label className="admin-label">Estrellas:
            <select className="admin-input admin-input--inline" value={rating} onChange={(e) => setRating(Number(e.target.value))}>
              {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
          <label className="admin-label">País:
            <select className="admin-input admin-input--inline" value={country} onChange={(e) => setCountry(e.target.value)}>
              {COUNTRIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </label>
          <button type="submit" className="admin-btn admin-btn--primary">+ Agregar reseña</button>
        </div>
        {msg && <span className="admin-msg">{msg}</span>}
      </form>

      <h3 className="admin-subtitle" style={{ marginTop: 28 }}>Reseñas actuales ({items.length})</h3>
      <div className="admin-list">
        {items.map((it) => (
          <div key={it.id} className="admin-list-item">
            <div>
              <strong>{it.name}</strong> · {'★'.repeat(it.rating)} · {COUNTRIES.find((c) => c.value === it.country)?.label || it.country}
              <p className="admin-list-text">{it.text}</p>
            </div>
            <button className="admin-btn admin-btn--danger" onClick={() => remove(it.id)}>🗑 Eliminar</button>
          </div>
        ))}
        {!items.length && <p className="admin-empty">No hay reseñas aún.</p>}
      </div>
    </div>
  );
}

/* ═══════ CONFIGURACIÓN ═══════ */
function SettingsManager() {
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');

  const load = useCallback(async () => {
    const { data } = await supabase.from('settings').select('*').limit(1).maybeSingle();
    if (data) { setPrice(data.consultation_price || ''); setPhoto(data.director_photo || null); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const savePrice = async () => {
    setMsg('');
    const { error } = await supabase.from('settings').upsert({ id: 1, consultation_price: price });
    setMsg(error ? 'Error: ' + error.message : '✓ Precio guardado');
  };

  const onPhoto = async (e: { currentTarget: HTMLInputElement }) => {
    const file = e.currentTarget.files?.[0];
    if (!file) return;
    setBusy(true); setMsg('');
    try {
      const url = await uploadFile(file, 'doctores');
      const { error } = await supabase.from('settings').upsert({ id: 1, director_photo: url });
      if (error) throw error;
      setPhoto(url);
      setMsg('✓ Foto actualizada');
    } catch (err) { setMsg('Error: ' + (err as Error).message); }
    setBusy(false);
  };

  return (
    <div className="admin-panel">
      <label className="admin-label admin-label--block">Precio de la consulta (ej.: US$200 / €200)</label>
      <div className="admin-row">
        <input className="admin-input" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="US$200 / €200" />
        <button className="admin-btn admin-btn--primary" onClick={savePrice}>Guardar precio</button>
      </div>

      <label className="admin-label admin-label--block" style={{ marginTop: 28 }}>Foto de los doctores (Dirección)</label>
      <div className="admin-row">
        {photo && <img src={photo} alt="" className="admin-thumb" style={{ maxWidth: 140 }} />}
        <label className="admin-btn admin-btn--primary">
          {busy ? 'Subiendo…' : 'Cambiar foto'}
          <input type="file" accept="image/*" hidden disabled={busy} onChange={onPhoto} />
        </label>
      </div>
      {msg && <span className="admin-msg">{msg}</span>}
    </div>
  );
}

/* ═══════ LOGIN ═══════ */
function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true); setError('');
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) setError('Correo o contraseña incorrectos.');
    setBusy(false);
  };

  return (
    <div className="admin-login">
      <form className="admin-login__card" onSubmit={submit}>
        <h1 className="admin-login__title">Panel Taveras de Lama</h1>
        <p className="admin-login__subtitle">Acceso exclusivo del personal de la clínica.</p>
        <input className="admin-input" type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="admin-input" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="admin-btn admin-btn--primary admin-btn--full" disabled={busy}>{busy ? 'Entrando…' : 'Entrar'}</button>
        {error && <span className="admin-msg admin-msg--error">{error}</span>}
      </form>
    </div>
  );
}

/* ═══════ APP DEL PANEL ═══════ */
type Tab = 'galeria' | 'videos' | 'resenas' | 'config';
export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState<Tab>('galeria');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!ready) return <div className="admin-login"><p style={{ color: '#fff' }}>Cargando…</p></div>;
  if (!session) return <LoginView />;

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <span className="admin-header__title">Panel — Taveras de Lama</span>
        <div className="admin-header__right">
          <a href="/" className="admin-header__link" target="_blank" rel="noreferrer">Ver web ↗</a>
          <button className="admin-btn admin-btn--ghost" onClick={() => supabase.auth.signOut()}>Salir</button>
        </div>
      </header>
      <nav className="admin-tabs">
        {([['galeria', '📷 Galería'], ['videos', '🎬 Videos'], ['resenas', '⭐ Reseñas'], ['config', '⚙️ Configuración']] as [Tab, string][]).map(([k, label]) => (
          <button key={k} className={`admin-tab${tab === k ? ' admin-tab--active' : ''}`} onClick={() => setTab(k)}>{label}</button>
        ))}
      </nav>
      <main className="admin-main">
        {tab === 'galeria' && (
          <MediaManager
            table="gallery_images" field="url" folder="galeria" accept="image/*" isVideo={false}
            addLabel="+ Subir foto(s)" itemWord="foto"
            hint="Fotos verticales (formato Instagram), se muestran completas en la galería."
            emptyLabel="No hay fotos aún. Pulsa “+ Subir foto(s)” para agregar la primera."
          />
        )}
        {tab === 'videos' && (
          <MediaManager
            table="videos" field="src" folder="videos" accept="video/*" isVideo={true}
            addLabel="+ Subir video(s) .mp4" itemWord="video"
            hint="Videos verticales (formato reel) en .mp4."
            emptyLabel="No hay videos aún. Pulsa “+ Subir video(s)” para agregar el primero."
          />
        )}
        {tab === 'resenas' && <ReviewManager />}
        {tab === 'config' && <SettingsManager />}
      </main>
    </div>
  );
}
