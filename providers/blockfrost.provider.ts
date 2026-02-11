import { BLOCKFROST_API_KEY } from "@/constants/enviroments.constant";
import { BlockfrostProvider } from "@meshsdk/core";

export const blockfrostProvider = new BlockfrostProvider(BLOCKFROST_API_KEY)