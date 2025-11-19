export const drizzleConfig = {
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://no-db-needed", // dummy URL
  },
  tablesFilter: ["t3bernardo_*"],
};
