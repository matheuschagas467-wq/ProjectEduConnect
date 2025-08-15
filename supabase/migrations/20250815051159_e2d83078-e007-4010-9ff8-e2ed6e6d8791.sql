-- Update alunos table to match the expected structure
ALTER TABLE public.alunos 
ADD COLUMN nome_do_aluno TEXT,
ADD COLUMN serie TEXT,
ADD COLUMN email_responsavel TEXT,
ADD COLUMN telefone_responsavel TEXT,
ADD COLUMN responsavel_nome TEXT;

-- Update existing data if needed (map nome_alunos to nome_do_aluno)
UPDATE public.alunos SET nome_do_aluno = nome_alunos WHERE nome_do_aluno IS NULL;

-- Create mensagens_enviadas table
CREATE TABLE public.mensagens_enviadas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  aluno_id INTEGER NOT NULL REFERENCES public.alunos(id_alunos),
  mensagem TEXT NOT NULL,
  email_responsavel TEXT NOT NULL,
  telefone_responsavel TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'enviada',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.mensagens_enviadas ENABLE ROW LEVEL SECURITY;

-- Create policies for mensagens_enviadas
CREATE POLICY "Allow authenticated users to view messages" 
ON public.mensagens_enviadas 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Allow authenticated users to insert messages" 
ON public.mensagens_enviadas 
FOR INSERT 
TO authenticated
WITH CHECK (true);

-- Create index for better performance
CREATE INDEX idx_mensagens_enviadas_aluno_id ON public.mensagens_enviadas(aluno_id);
CREATE INDEX idx_mensagens_enviadas_created_at ON public.mensagens_enviadas(created_at);