export interface ApiResponse {
  responseai: string;
  choices?: Choice[];
}

export interface Choice {
  message: Message;
}

export interface Message {
  content: string;
}
