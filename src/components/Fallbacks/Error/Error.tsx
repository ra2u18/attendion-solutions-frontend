import { Button } from '@/components/Elements';

type Props = NonNullable<unknown>;

export const Error: React.FC<Props> = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button variant="inverse" className="mt-4" onClick={() => window.location.assign('/')}>
        Refresh
      </Button>
    </div>
  );
};
