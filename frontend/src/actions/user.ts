"use server";

interface TemporarySignUpProps {
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
}: TemporarySignUpProps) => {
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

interface CompleteSignUpProps {
  uid: string;
  token: string;
}

// アカウント本登録
export const completeSignUp = async ({ uid, token }: CompleteSignUpProps) => {
  try {
    const body = JSON.stringify({
      uid,
      token,
    });

    // アカウント本登録を送信
    const apiRes = await fetch(
      `${process.env.API_URL}/api/auth/users/activation/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );

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

interface ForgotPasswordProps {
  email: string;
}

// パスワード再設定
export const forgotPassword = async ({ email }: ForgotPasswordProps) => {
  try {
    const body = JSON.stringify({
      email,
    });

    // パスワード再設定を送信
    const apiRes = await fetch(
      `${process.env.API_URL}/api/auth/users/reset_password/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );

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

interface ResetPasswordProps {
  uid: string;
  token: string;
  newPassword: string;
  reNewPassword: string;
}

// パスワード再設定確認
export const resetPassword = async ({
  uid,
  token,
  newPassword,
  reNewPassword,
}: ResetPasswordProps) => {
  try {
    const body = JSON.stringify({
      uid,
      token,
      new_password: newPassword,
      re_new_password: reNewPassword,
    });

    // パスワード再設定確認を送信
    const apiRes = await fetch(
      `${process.env.API_URL}/api/auth/users/reset_password_confirm/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );

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
