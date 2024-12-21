interface TerminalLineProps {
  content: string;
  type: 'input' | 'output' | 'error' | 'info';
}

export function TerminalLine({ content, type }: TerminalLineProps) {
  const getLineStyle = () => {
    switch (type) {
      case 'input':
        return 'text-foreground';
      case 'error':
        return 'text-red-500 dark:text-red-400';
      case 'info':
        return 'text-blue-500 dark:text-blue-400';
      default:
        return 'text-emerald-500 dark:text-emerald-400';
    }
  };

  return (
    <div className={`text-sm font-mono whitespace-pre-wrap ${getLineStyle()}`}>
      {type === 'input' ? `> ${content}` : content}
    </div>
  );
}