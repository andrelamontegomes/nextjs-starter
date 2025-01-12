import { Button } from '@/components/button';
import { InputField } from '@/components/form/input-field';
import { SelectField } from '@/components/form/select-field';
import { TextAreaField } from '@/components/form/text-area-field';

const SUBJECT_OPTIONS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'business', label: 'Business Proposal' },
];

export default function Contact() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid gap-8 md:grid-cols-2'>
        {/* Contact Form Section */}
        <div className='space-y-6'>
          <h1 className='mb-6 text-3xl font-bold'>Contact Us</h1>

          <form className='space-y-4'>
            <InputField
              legend='Name'
              name='name'
              placeholder='Your name'
              required
            />

            <InputField
              legend='Email'
              name='email'
              type='email'
              placeholder='your.email@example.com'
              required
            />

            <SelectField
              legend='Subject'
              name='subject'
              options={SUBJECT_OPTIONS}
              placeholder='Select a topic'
              required
            />

            <TextAreaField
              legend='Message'
              name='message'
              placeholder='Your message here...'
              required
              rows={6}
            />

            <Button
              text='Send Message'
              type='submit'
            />
          </form>
        </div>

        {/* Image and Info Section */}
        <div className='flex flex-col justify-center space-y-6'>
          <div className='bg-base-200 relative h-64 w-full overflow-hidden rounded-lg'>
            {/* Replace with your local image */}
            <div className='text-base-content/50 flex h-full items-center justify-center'>
              Contact Illustration
            </div>
          </div>

          <div className='bg-base-200 space-y-4 rounded-lg p-4'>
            <h2 className='text-xl font-semibold'>Other Ways to Reach Us</h2>
            <div className='space-y-2'>
              <p className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
                support@example.com
              </p>
              <p className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
