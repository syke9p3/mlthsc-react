import { getPostCardDataById } from '@/api/api';
import { ClassificationResult } from '@/lib/types/types';
import { describe, it, expect, vi, beforeAll, expectTypeOf } from 'vitest';

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

describe('Get Saved Post By ID', () => {

    let post: Array<{ [key: string]: unknown }>;

    beforeAll(async () => {
        post = await getPostCardDataById();
    }, BEFORE_ALL_TIMEOUT)


})

