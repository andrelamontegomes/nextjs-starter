interface CardProps {
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

export const Card = ({ title, description, buttonText, onClick }: CardProps) => {
  return (
    <div className='card bg-base-200 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        {buttonText && (
          <div className='card-actions justify-end'>
            <button
              className='btn btn-primary'
              onClick={onClick}
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
