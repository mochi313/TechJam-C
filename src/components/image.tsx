import Image from 'next/image';

export const MyImage = () => (
  <Image
    src="/path/to/image.jpg"
    alt="Description"
    width={500}
    height={300}
    layout="responsive"
  />
);