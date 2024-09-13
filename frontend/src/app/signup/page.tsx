import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/nextauth";
import SignUp from "@/components/auth/SignUp";

// アカウント仮登録ページ
const SignUpPage = async () => {
  // 誤認証情報取得
  const user = await getAuthSession();

  if (user) {
    redirect("/");
  }

  return <SignUp />;
};

export default SignUpPage;
