export function CodePreview() {
  return (
    <div className="rounded-lg bg-card p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <pre className="font-mono text-sm">
        <code className="text-muted-foreground">
          {`const developer = {
  name: 'John Doe',
  skills: ['React', 'Node.js', 'TypeScript'],
  passion: 'Building amazing web apps',
  coffee: true,
};

while (developer.coffee) {
  developer.code();
  developer.learn();
  developer.create();
}`}
        </code>
      </pre>
    </div>
  );
}