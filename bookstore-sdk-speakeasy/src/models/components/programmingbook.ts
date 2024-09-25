/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { Author, Author$inboundSchema, Author$Outbound, Author$outboundSchema } from "./author.js";
import * as z from "zod";

export type ProgrammingBook = {
    id?: number | undefined;
    title: string;
    description: string;
    /**
     * Price in USD cents
     */
    price: number;
    category?: "Programming" | undefined;
    author: Author;
    coverImage?: string | undefined;
};

/** @internal */
export const ProgrammingBook$inboundSchema: z.ZodType<ProgrammingBook, z.ZodTypeDef, unknown> = z
    .object({
        id: z.number().int().optional(),
        title: z.string(),
        description: z.string(),
        price: z.number().int(),
        category: z.literal("Programming").optional(),
        author: Author$inboundSchema,
        cover_image: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            cover_image: "coverImage",
        });
    });

/** @internal */
export type ProgrammingBook$Outbound = {
    id?: number | undefined;
    title: string;
    description: string;
    price: number;
    category: "Programming";
    author: Author$Outbound;
    cover_image?: string | undefined;
};

/** @internal */
export const ProgrammingBook$outboundSchema: z.ZodType<
    ProgrammingBook$Outbound,
    z.ZodTypeDef,
    ProgrammingBook
> = z
    .object({
        id: z.number().int().optional(),
        title: z.string(),
        description: z.string(),
        price: z.number().int(),
        category: z.literal("Programming").default("Programming" as const),
        author: Author$outboundSchema,
        coverImage: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            coverImage: "cover_image",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProgrammingBook$ {
    /** @deprecated use `ProgrammingBook$inboundSchema` instead. */
    export const inboundSchema = ProgrammingBook$inboundSchema;
    /** @deprecated use `ProgrammingBook$outboundSchema` instead. */
    export const outboundSchema = ProgrammingBook$outboundSchema;
    /** @deprecated use `ProgrammingBook$Outbound` instead. */
    export type Outbound = ProgrammingBook$Outbound;
}
