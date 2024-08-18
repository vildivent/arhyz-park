import ReviewModal from "./components/ReviewModal";
import TriggerNoSession from "./components/TriggerNoSession";
import { getServerAuthSession } from "~/server/auth";

export default async function CreateReview() {
  const session = await getServerAuthSession();
  if (!session) return <TriggerNoSession />;
  return <ReviewModal />;
}
