import { redirect } from "next/navigation";
import { completeSignUp } from "@/actions/user";
import { getAuthSession } from "@/lib/nextauth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CompleteSignUpProps {
  params: {
    uid: string;
    token: string;
  };
}

// アカウント本登録ページ
const CompleteSignUpPage = async ({ params }: CompleteSignUpProps) => {
  const { uid, token } = params;

  // 誤認証情報取得
  const user = await getAuthSession();

  if (user) {
    redirect("/");
  }

  // アカウント本登録
  const res = await completeSignUp({ uid, token });

  if (res.success) {
    return (
      <div className="max-w-[400px] m-auto text-center">
        <div className="text-2xl font-bold mb-10">本登録完了</div>
        <div>アカウント本登録が完了しました</div>
        <div className="mb-5">ログインしてください</div>
        <Button asChild className="font-bold">
          <Link href="/login">ログイン</Link>
        </Button>
      </div>
    );
  } else {
    return (
      <div className="max-w-[400px] m-auto text-center">
        <div className="text-2xl font-bold mb-10">本登録失敗</div>
        <div>アカウント本登録に失敗しました</div>
        <div className="mb-5">再度アカウント仮登録を行なってください</div>
        <Button asChild className="font-bold">
          <Link href="/signup">新規登録</Link>
        </Button>
      </div>
    );
  }
};

export default CompleteSignUpPage;
