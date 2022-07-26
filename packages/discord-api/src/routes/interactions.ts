import type {
	RESTDeleteAPIInteractionFollowupResult,
	RESTPatchAPIInteractionFollowupJSONBody,
	RESTPatchAPIInteractionFollowupResult,
	RESTPostAPIInteractionFollowupJSONBody,
	RESTPostAPIInteractionFollowupResult,
} from "discord-api-types/v10";
import { Routes } from "discord-api-types/v10";
import type { Snowflake } from "discord-snowflake";
import { client } from "../client";

// TODO: Test, Document
export async function postInteractionFollowup(
	applicationId: Snowflake,
	interactionToken: string,
	data: RESTPostAPIInteractionFollowupJSONBody
) {
	return client.post(Routes.webhook(applicationId, interactionToken), {
		body: data,
	}) as Promise<RESTPostAPIInteractionFollowupResult>;
}

// TODO: Test, Document
export async function patchInteractionFollowup(
	applicationId: Snowflake,
	interactionToken: string,
	id: string,
	data: RESTPatchAPIInteractionFollowupJSONBody
) {
	return client.patch(
		Routes.webhookMessage(applicationId, interactionToken, id),
		{
			body: data,
		}
	) as Promise<RESTPatchAPIInteractionFollowupResult>;
}

// TODO: Test, Document
export async function deleteInteractionFollowup(
	applicationId: Snowflake,
	interactionToken: string,
	id: string
) {
	return client.delete(
		Routes.webhookMessage(applicationId, interactionToken, id)
	) as Promise<RESTDeleteAPIInteractionFollowupResult>;
}
