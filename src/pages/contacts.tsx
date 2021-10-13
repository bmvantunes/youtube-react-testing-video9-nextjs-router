import { useRouter } from 'next/router';

export default function Contacts() {
  const { query } = useRouter();

  return (
    <div>
      This is the contacts page <pre>{JSON.stringify(query, null, 4)}</pre>
    </div>
  );
}
