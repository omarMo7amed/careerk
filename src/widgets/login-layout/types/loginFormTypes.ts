export type FormData = {
  email: string;
  password: string;
  remember: boolean;
};

export type MatchItemProps = {
  emoji: string;
  title: string;
  company: string;
  score: string;
};

export type LoginState = {
  errors: {
    email?: string[];
    password?: string[];
  };
  success: boolean;
};
