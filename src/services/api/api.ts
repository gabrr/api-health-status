import { FetchHttpClient } from "./implementation/FetchHttpClient";

/**
 * By using fetch through an abstraction, we make sure that when we want to
 * switch to another HTTP Library, we will do so only by adding another implementation.
 *
 * That applies: Single Responsibility and Open Closed Principle.
 *
 * The implementations also use the dependency inversion pattern.
 **/
const Api = new FetchHttpClient();

export default Api;
