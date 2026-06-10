import { createClient } from '@supabase/supabase-js';

/**
 * Cliente de Supabase — base de datos y panel del Centro Odontológico Taveras de Lama.
 * La 'anon key' es PÚBLICA por diseño (va en el navegador) y está protegida por las
 * reglas de seguridad (RLS) configuradas en Supabase.
 */
const SUPABASE_URL = 'https://jfelmmbiuthsxkuqzcgf.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmZWxtbWJpdXRoc3hrdXF6Y2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwNTgxOTMsImV4cCI6MjA5NjYzNDE5M30.S-rFCs-7zjeUwhKgI1K-WFg0NTcmsQBa0Nowd258UeE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/** Bucket de almacenamiento para fotos y videos subidos desde el panel. */
export const MEDIA_BUCKET = 'media';
