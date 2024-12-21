interface TerminalLineProps {
  content: string;
  type?: 'input' | 'output' | 'error';
}

export function TerminalLine({ content, type = 'output' }: TerminalLineProps) {
  const getLineStyle = () => {
    switch (type) {
      case 'input':
        return 'text-foreground';
      case 'error':
        return 'text-red-500';
      default:
        return 'text-emerald-500';
    }
  };

  return (
    <div className={`text-sm font-mono whitespace-pre-wrap ${getLineStyle()}`}>
      {type === 'input' ? `> ${content}` : content}
    </div>
  );
}