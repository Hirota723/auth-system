"use server";

interface TemporarySignUpParams {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

// アカウント仮登録
export const temporarySignUp = async ({
  name,
  email,
  password,
  rePassword,
}: TemporarySignUpParams) => {
  try {
    const body = JSON.stringify({
      name,
      email,
      password,
      re_password: rePassword,
    });

    // アカウント仮登録を送信
    const apiRes = await fetch(`${process.env.API_URL}/api/auth/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    // APIレスポンスが正常でない場合、失敗を返す
    if (!apiRes.ok) {
      return { success: false };
    }

    // 成功を返す
    return { success: true };
  } catch (error) {
    console.error(error);
    // エラー発生時に、失敗を返す
    return { success: false };
  }
};
