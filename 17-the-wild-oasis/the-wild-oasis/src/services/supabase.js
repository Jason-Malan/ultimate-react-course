import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xhhsypfhnukquyrpqqlt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoaHN5cGZobnVrcXV5cnBxcWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5ODcwMDksImV4cCI6MjAxMzU2MzAwOX0.tUqfhRww5jTk4MImEvqHrtq0bab-LEF0kJS8cNnZtmM";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
