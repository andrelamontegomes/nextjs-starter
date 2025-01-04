import { Button } from '@/components/Button';

export default function Home() {
  return (
    <div className='prose'>
      <h1>NextJS Starter Template</h1>
      <h3>
        Author:{' '}
        <a
          href='https://andrelgomes.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Andre L Gomes
        </a>
      </h3>
      <Button text='Button' />
    </div>
  );
}
