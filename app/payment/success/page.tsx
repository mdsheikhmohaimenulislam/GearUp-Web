import { confirmPaymentAction } from "../_actions/confirmPaymentAction";

type Props = {
  searchParams: {
    session_id?: string;
  };
};

export default async function PaymentSuccessPage({ searchParams }: Props) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    return <div>Session id not found</div>;
  }

  const result = await confirmPaymentAction({
    sessionId,
  });
  return (
    <div
      className="
    min-h-screen
    flex
    items-center
    justify-center
    "
    >
      <div
        className="
      border
      rounded-xl
      p-10
      text-center
      "
      >
        {result.success ? (
          <>
            <h1
              className="
          text-3xl
          font-bold
          text-green-600
          "
            >
              Payment Successful 🎉
            </h1>

            <p className="mt-3">Your rental payment completed.</p>
          </>
        ) : (
          <>
            <h1
              className="
          text-3xl
          font-bold
          text-red-600
          "
            >
              Payment Failed
            </h1>

            <p>{result.message}</p>
          </>
        )}
      </div>
    </div>
  );
}
