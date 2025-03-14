import {createTRPCReact} from '@trpc/react-query';
import type {TrpcRouter} from '@fullStack/backend/src/trpc';

const trpc =createTRPCReact<TrpcRouter>()

