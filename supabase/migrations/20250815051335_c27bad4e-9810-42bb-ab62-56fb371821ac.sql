-- Enable Row Level Security on alunos table
ALTER TABLE public.alunos ENABLE ROW LEVEL SECURITY;

-- Create policies for alunos table
CREATE POLICY "Allow authenticated users to view alunos" 
ON public.alunos 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Allow authenticated users to insert alunos" 
ON public.alunos 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update alunos" 
ON public.alunos 
FOR UPDATE 
TO authenticated
USING (true);