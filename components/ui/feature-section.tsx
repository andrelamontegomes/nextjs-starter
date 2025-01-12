const FEATURES = [
  {
    icon: '🚀',
    title: 'Fast Performance',
    description:
      'Optimized for speed and efficiency with Next.js app router and React Server Components',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Styled with TailwindCSS and DaisyUI for a modern, customizable look',
  },
  {
    icon: '🛠️',
    title: 'Developer Experience',
    description: 'TypeScript support, ESLint, and Prettier configured out of the box',
  },
];

export const FeatureSection = () => {
  return (
    <div className='my-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
      {FEATURES.map((feature, index) => (
        <div
          key={index}
          className='flex flex-col items-center p-4 text-center'
        >
          <div className='mb-4 text-4xl'>{feature.icon}</div>
          <h3 className='mb-2 text-xl font-semibold'>{feature.title}</h3>
          <p className='text-sm'>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};
