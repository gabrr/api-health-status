export enum ResourceType {
  ACCOUNTS = "accounts",
  ASSETS = "assets",
  CUSTOMERS = "customers",
  DATAPOINTS = "datapoints",
  DEVICES = "devices",
  DOCUMENTS = "documents",
  FORMS = "forms",
  INVITES = "invites",
  MEDIA = "media",
  MESSAGES = "messages",
  NAMESPACES = "namespaces",
  ORDERS = "orders",
  PATIENTS = "patients",
  RELATIONSHIPS = "relationships",
  RULES = "rules",
  TEMPLATES = "templates",
  USERS = "users",
  WORKFLOWS = "workflows",
}

export interface IHealthCheck {
  success: boolean;
  message: string;
  hostname: string;
  time: number;
}
