export default function About() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-6 text-3xl font-bold'>About Us</h1>
      <div className='prose prose-lg max-w-none'>
        <p className='mb-4'>
          Welcome to our Next.js template project. This is an example page demonstrating the basic
          structure and routing capabilities of Next.js 14.
        </p>
        <p className='mb-4'>Built with modern technologies including:</p>
        <ul className='mb-4 list-disc pl-6'>
          <li>Next.js 14 with App Router</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Daisy UI</li>
        </ul>
      </div>
    </div>
  );
}
