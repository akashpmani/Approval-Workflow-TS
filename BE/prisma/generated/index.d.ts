
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PurchaseOrder
 * 
 */
export type PurchaseOrder = $Result.DefaultSelection<Prisma.$PurchaseOrderPayload>
/**
 * Model POItems
 * 
 */
export type POItems = $Result.DefaultSelection<Prisma.$POItemsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRoles: {
  HR: 'HR',
  MANAGER: 'MANAGER',
  USER: 'USER'
};

export type UserRoles = (typeof UserRoles)[keyof typeof UserRoles]


export const PurchaseStatus: {
  REQUESTED: 'REQUESTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type PurchaseStatus = (typeof PurchaseStatus)[keyof typeof PurchaseStatus]


export const PaymentModes: {
  CASH: 'CASH',
  CARD: 'CARD',
  DIGITAL: 'DIGITAL'
};

export type PaymentModes = (typeof PaymentModes)[keyof typeof PaymentModes]


export const Items: {
  LAPTOP: 'LAPTOP',
  KEYBOARD: 'KEYBOARD',
  MOUSE: 'MOUSE',
  MONITOR: 'MONITOR'
};

export type Items = (typeof Items)[keyof typeof Items]


export const ExpenseClaimsStatus: {
  REQUESTED: 'REQUESTED',
  APPROVED: 'APPROVED',
  CLAIMED: 'CLAIMED',
  REJECTED: 'REJECTED'
};

export type ExpenseClaimsStatus = (typeof ExpenseClaimsStatus)[keyof typeof ExpenseClaimsStatus]


export const LeaveRequestStatus: {
  REQUESTED: 'REQUESTED',
  APPROVED: 'APPROVED',
  CANCELLED: 'CANCELLED',
  REJECTED: 'REJECTED'
};

export type LeaveRequestStatus = (typeof LeaveRequestStatus)[keyof typeof LeaveRequestStatus]


export const LeaveTypes: {
  SICK_LEAVE: 'SICK_LEAVE',
  CASUAL_LEAVE: 'CASUAL_LEAVE',
  LOSS_OF_PAY: 'LOSS_OF_PAY'
};

export type LeaveTypes = (typeof LeaveTypes)[keyof typeof LeaveTypes]

}

export type UserRoles = $Enums.UserRoles

export const UserRoles: typeof $Enums.UserRoles

export type PurchaseStatus = $Enums.PurchaseStatus

export const PurchaseStatus: typeof $Enums.PurchaseStatus

export type PaymentModes = $Enums.PaymentModes

export const PaymentModes: typeof $Enums.PaymentModes

export type Items = $Enums.Items

export const Items: typeof $Enums.Items

export type ExpenseClaimsStatus = $Enums.ExpenseClaimsStatus

export const ExpenseClaimsStatus: typeof $Enums.ExpenseClaimsStatus

export type LeaveRequestStatus = $Enums.LeaveRequestStatus

export const LeaveRequestStatus: typeof $Enums.LeaveRequestStatus

export type LeaveTypes = $Enums.LeaveTypes

export const LeaveTypes: typeof $Enums.LeaveTypes

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrder`: Exposes CRUD operations for the **PurchaseOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrders
    * const purchaseOrders = await prisma.purchaseOrder.findMany()
    * ```
    */
  get purchaseOrder(): Prisma.PurchaseOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pOItems`: Exposes CRUD operations for the **POItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more POItems
    * const pOItems = await prisma.pOItems.findMany()
    * ```
    */
  get pOItems(): Prisma.POItemsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PurchaseOrder: 'PurchaseOrder',
    POItems: 'POItems'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "purchaseOrder" | "pOItems"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrder: {
        payload: Prisma.$PurchaseOrderPayload<ExtArgs>
        fields: Prisma.PurchaseOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          delete: {
            args: Prisma.PurchaseOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          update: {
            args: Prisma.PurchaseOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrder>
          }
          groupBy: {
            args: Prisma.PurchaseOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderCountAggregateOutputType> | number
          }
        }
      }
      POItems: {
        payload: Prisma.$POItemsPayload<ExtArgs>
        fields: Prisma.POItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.POItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.POItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POItemsPayload>
          }
          findFirst: {
            args: Prisma.POItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.POItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POItemsPayload>
          }
          findMany: {
            args: Prisma.POItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POItemsPayload>[]
          }
          create: {
            args: Prisma.POItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POItemsPayload>
          }
          createMany: {
            args: Prisma.POItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.POItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POItemsPayload>[]
          }
          delete: {
            args: Prisma.POItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POItemsPayload>
          }
          update: {
            args: Prisma.POItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POItemsPayload>
          }
          deleteMany: {
            args: Prisma.POItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.POItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.POItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POItemsPayload>[]
          }
          upsert: {
            args: Prisma.POItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POItemsPayload>
          }
          aggregate: {
            args: Prisma.POItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePOItems>
          }
          groupBy: {
            args: Prisma.POItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<POItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.POItemsCountArgs<ExtArgs>
            result: $Utils.Optional<POItemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    purchaseOrder?: PurchaseOrderOmit
    pOItems?: POItemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    po_req_user: number
    po_app_user: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    po_req_user?: boolean | UserCountOutputTypeCountPo_req_userArgs
    po_app_user?: boolean | UserCountOutputTypeCountPo_app_userArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPo_req_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPo_app_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
  }


  /**
   * Count Type PurchaseOrderCountOutputType
   */

  export type PurchaseOrderCountOutputType = {
    poitems: number
  }

  export type PurchaseOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poitems?: boolean | PurchaseOrderCountOutputTypeCountPoitemsArgs
  }

  // Custom InputTypes
  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderCountOutputType
     */
    select?: PurchaseOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeCountPoitemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    is_active: boolean | null
    is_verified: boolean | null
    role: $Enums.UserRoles | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    is_active: boolean | null
    is_verified: boolean | null
    role: $Enums.UserRoles | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    first_name: number
    last_name: number
    phone: number
    is_active: number
    is_verified: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    first_name?: true
    last_name?: true
    phone?: true
    is_active?: true
    is_verified?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    first_name?: true
    last_name?: true
    phone?: true
    is_active?: true
    is_verified?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    first_name?: true
    last_name?: true
    phone?: true
    is_active?: true
    is_verified?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    first_name: string | null
    last_name: string | null
    phone: string | null
    is_active: boolean
    is_verified: boolean
    role: $Enums.UserRoles
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    is_active?: boolean
    is_verified?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    po_req_user?: boolean | User$po_req_userArgs<ExtArgs>
    po_app_user?: boolean | User$po_app_userArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    is_active?: boolean
    is_verified?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    is_active?: boolean
    is_verified?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    is_active?: boolean
    is_verified?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "first_name" | "last_name" | "phone" | "is_active" | "is_verified" | "role" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    po_req_user?: boolean | User$po_req_userArgs<ExtArgs>
    po_app_user?: boolean | User$po_app_userArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      po_req_user: Prisma.$PurchaseOrderPayload<ExtArgs>[]
      po_app_user: Prisma.$PurchaseOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
      first_name: string | null
      last_name: string | null
      phone: string | null
      is_active: boolean
      is_verified: boolean
      role: $Enums.UserRoles
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    po_req_user<T extends User$po_req_userArgs<ExtArgs> = {}>(args?: Subset<T, User$po_req_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    po_app_user<T extends User$po_app_userArgs<ExtArgs> = {}>(args?: Subset<T, User$po_app_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'UserRoles'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.po_req_user
   */
  export type User$po_req_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    cursor?: PurchaseOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * User.po_app_user
   */
  export type User$po_app_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    cursor?: PurchaseOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrder
   */

  export type AggregatePurchaseOrder = {
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  export type PurchaseOrderAvgAggregateOutputType = {
    id: number | null
    payment_amount: Decimal | null
    requested_by_id: number | null
    approved_by_id: number | null
  }

  export type PurchaseOrderSumAggregateOutputType = {
    id: number | null
    payment_amount: Decimal | null
    requested_by_id: number | null
    approved_by_id: number | null
  }

  export type PurchaseOrderMinAggregateOutputType = {
    id: number | null
    po_number: string | null
    vendor: string | null
    vendor_address: string | null
    status: $Enums.PurchaseStatus | null
    payment_mode: $Enums.PaymentModes | null
    payment_amount: Decimal | null
    payment_reference: string | null
    requested_at: Date | null
    requested_by_id: number | null
    approved_at: Date | null
    approved_by_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PurchaseOrderMaxAggregateOutputType = {
    id: number | null
    po_number: string | null
    vendor: string | null
    vendor_address: string | null
    status: $Enums.PurchaseStatus | null
    payment_mode: $Enums.PaymentModes | null
    payment_amount: Decimal | null
    payment_reference: string | null
    requested_at: Date | null
    requested_by_id: number | null
    approved_at: Date | null
    approved_by_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PurchaseOrderCountAggregateOutputType = {
    id: number
    po_number: number
    vendor: number
    vendor_address: number
    status: number
    payment_mode: number
    payment_amount: number
    payment_reference: number
    additional_details: number
    requested_at: number
    requested_by_id: number
    approved_at: number
    approved_by_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PurchaseOrderAvgAggregateInputType = {
    id?: true
    payment_amount?: true
    requested_by_id?: true
    approved_by_id?: true
  }

  export type PurchaseOrderSumAggregateInputType = {
    id?: true
    payment_amount?: true
    requested_by_id?: true
    approved_by_id?: true
  }

  export type PurchaseOrderMinAggregateInputType = {
    id?: true
    po_number?: true
    vendor?: true
    vendor_address?: true
    status?: true
    payment_mode?: true
    payment_amount?: true
    payment_reference?: true
    requested_at?: true
    requested_by_id?: true
    approved_at?: true
    approved_by_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PurchaseOrderMaxAggregateInputType = {
    id?: true
    po_number?: true
    vendor?: true
    vendor_address?: true
    status?: true
    payment_mode?: true
    payment_amount?: true
    payment_reference?: true
    requested_at?: true
    requested_by_id?: true
    approved_at?: true
    approved_by_id?: true
    created_at?: true
    updated_at?: true
  }

  export type PurchaseOrderCountAggregateInputType = {
    id?: true
    po_number?: true
    vendor?: true
    vendor_address?: true
    status?: true
    payment_mode?: true
    payment_amount?: true
    payment_reference?: true
    additional_details?: true
    requested_at?: true
    requested_by_id?: true
    approved_at?: true
    approved_by_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PurchaseOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrder to aggregate.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrders
    **/
    _count?: true | PurchaseOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type GetPurchaseOrderAggregateType<T extends PurchaseOrderAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrder[P]>
      : GetScalarType<T[P], AggregatePurchaseOrder[P]>
  }




  export type PurchaseOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithAggregationInput | PurchaseOrderOrderByWithAggregationInput[]
    by: PurchaseOrderScalarFieldEnum[] | PurchaseOrderScalarFieldEnum
    having?: PurchaseOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderCountAggregateInputType | true
    _avg?: PurchaseOrderAvgAggregateInputType
    _sum?: PurchaseOrderSumAggregateInputType
    _min?: PurchaseOrderMinAggregateInputType
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type PurchaseOrderGroupByOutputType = {
    id: number
    po_number: string
    vendor: string
    vendor_address: string | null
    status: $Enums.PurchaseStatus
    payment_mode: $Enums.PaymentModes
    payment_amount: Decimal
    payment_reference: string
    additional_details: JsonValue | null
    requested_at: Date
    requested_by_id: number
    approved_at: Date | null
    approved_by_id: number | null
    created_at: Date
    updated_at: Date
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  type GetPurchaseOrderGroupByPayload<T extends PurchaseOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    po_number?: boolean
    vendor?: boolean
    vendor_address?: boolean
    status?: boolean
    payment_mode?: boolean
    payment_amount?: boolean
    payment_reference?: boolean
    additional_details?: boolean
    requested_at?: boolean
    requested_by_id?: boolean
    approved_at?: boolean
    approved_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    requested_by?: boolean | UserDefaultArgs<ExtArgs>
    approved_by?: boolean | PurchaseOrder$approved_byArgs<ExtArgs>
    poitems?: boolean | PurchaseOrder$poitemsArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    po_number?: boolean
    vendor?: boolean
    vendor_address?: boolean
    status?: boolean
    payment_mode?: boolean
    payment_amount?: boolean
    payment_reference?: boolean
    additional_details?: boolean
    requested_at?: boolean
    requested_by_id?: boolean
    approved_at?: boolean
    approved_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    requested_by?: boolean | UserDefaultArgs<ExtArgs>
    approved_by?: boolean | PurchaseOrder$approved_byArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    po_number?: boolean
    vendor?: boolean
    vendor_address?: boolean
    status?: boolean
    payment_mode?: boolean
    payment_amount?: boolean
    payment_reference?: boolean
    additional_details?: boolean
    requested_at?: boolean
    requested_by_id?: boolean
    approved_at?: boolean
    approved_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    requested_by?: boolean | UserDefaultArgs<ExtArgs>
    approved_by?: boolean | PurchaseOrder$approved_byArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectScalar = {
    id?: boolean
    po_number?: boolean
    vendor?: boolean
    vendor_address?: boolean
    status?: boolean
    payment_mode?: boolean
    payment_amount?: boolean
    payment_reference?: boolean
    additional_details?: boolean
    requested_at?: boolean
    requested_by_id?: boolean
    approved_at?: boolean
    approved_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PurchaseOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "po_number" | "vendor" | "vendor_address" | "status" | "payment_mode" | "payment_amount" | "payment_reference" | "additional_details" | "requested_at" | "requested_by_id" | "approved_at" | "approved_by_id" | "created_at" | "updated_at", ExtArgs["result"]["purchaseOrder"]>
  export type PurchaseOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requested_by?: boolean | UserDefaultArgs<ExtArgs>
    approved_by?: boolean | PurchaseOrder$approved_byArgs<ExtArgs>
    poitems?: boolean | PurchaseOrder$poitemsArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requested_by?: boolean | UserDefaultArgs<ExtArgs>
    approved_by?: boolean | PurchaseOrder$approved_byArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requested_by?: boolean | UserDefaultArgs<ExtArgs>
    approved_by?: boolean | PurchaseOrder$approved_byArgs<ExtArgs>
  }

  export type $PurchaseOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrder"
    objects: {
      requested_by: Prisma.$UserPayload<ExtArgs>
      approved_by: Prisma.$UserPayload<ExtArgs> | null
      poitems: Prisma.$POItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      po_number: string
      vendor: string
      vendor_address: string | null
      status: $Enums.PurchaseStatus
      payment_mode: $Enums.PaymentModes
      payment_amount: Prisma.Decimal
      payment_reference: string
      additional_details: Prisma.JsonValue | null
      requested_at: Date
      requested_by_id: number
      approved_at: Date | null
      approved_by_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["purchaseOrder"]>
    composites: {}
  }

  type PurchaseOrderGetPayload<S extends boolean | null | undefined | PurchaseOrderDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderPayload, S>

  type PurchaseOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderCountAggregateInputType | true
    }

  export interface PurchaseOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrder'], meta: { name: 'PurchaseOrder' } }
    /**
     * Find zero or one PurchaseOrder that matches the filter.
     * @param {PurchaseOrderFindUniqueArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany()
     * 
     * // Get first 10 PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderFindManyArgs>(args?: SelectSubset<T, PurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrder.
     * @param {PurchaseOrderCreateArgs} args - Arguments to create a PurchaseOrder.
     * @example
     * // Create one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.create({
     *   data: {
     *     // ... data to create a PurchaseOrder
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderCreateArgs>(args: SelectSubset<T, PurchaseOrderCreateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrders.
     * @param {PurchaseOrderCreateManyArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseOrders and returns the data saved in the database.
     * @param {PurchaseOrderCreateManyAndReturnArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseOrder.
     * @param {PurchaseOrderDeleteArgs} args - Arguments to delete one PurchaseOrder.
     * @example
     * // Delete one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrder
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderDeleteArgs>(args: SelectSubset<T, PurchaseOrderDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrder.
     * @param {PurchaseOrderUpdateArgs} args - Arguments to update one PurchaseOrder.
     * @example
     * // Update one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderUpdateArgs>(args: SelectSubset<T, PurchaseOrderUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrders.
     * @param {PurchaseOrderDeleteManyArgs} args - Arguments to filter PurchaseOrders to delete.
     * @example
     * // Delete a few PurchaseOrders
     * const { count } = await prisma.purchaseOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders and returns the data updated in the database.
     * @param {PurchaseOrderUpdateManyAndReturnArgs} args - Arguments to update many PurchaseOrders.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseOrder.
     * @param {PurchaseOrderUpsertArgs} args - Arguments to update or create a PurchaseOrder.
     * @example
     * // Update or create a PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrder we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderUpsertArgs>(args: SelectSubset<T, PurchaseOrderUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderCountArgs} args - Arguments to filter PurchaseOrders to count.
     * @example
     * // Count the number of PurchaseOrders
     * const count = await prisma.purchaseOrder.count({
     *   where: {
     *     // ... the filter for the PurchaseOrders we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderCountArgs>(
      args?: Subset<T, PurchaseOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseOrderAggregateArgs>(args: Subset<T, PurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderAggregateType<T>>

    /**
     * Group by PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrder model
   */
  readonly fields: PurchaseOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requested_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approved_by<T extends PurchaseOrder$approved_byArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrder$approved_byArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    poitems<T extends PurchaseOrder$poitemsArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrder$poitemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseOrder model
   */
  interface PurchaseOrderFieldRefs {
    readonly id: FieldRef<"PurchaseOrder", 'Int'>
    readonly po_number: FieldRef<"PurchaseOrder", 'String'>
    readonly vendor: FieldRef<"PurchaseOrder", 'String'>
    readonly vendor_address: FieldRef<"PurchaseOrder", 'String'>
    readonly status: FieldRef<"PurchaseOrder", 'PurchaseStatus'>
    readonly payment_mode: FieldRef<"PurchaseOrder", 'PaymentModes'>
    readonly payment_amount: FieldRef<"PurchaseOrder", 'Decimal'>
    readonly payment_reference: FieldRef<"PurchaseOrder", 'String'>
    readonly additional_details: FieldRef<"PurchaseOrder", 'Json'>
    readonly requested_at: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly requested_by_id: FieldRef<"PurchaseOrder", 'Int'>
    readonly approved_at: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly approved_by_id: FieldRef<"PurchaseOrder", 'Int'>
    readonly created_at: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly updated_at: FieldRef<"PurchaseOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrder findUnique
   */
  export type PurchaseOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findUniqueOrThrow
   */
  export type PurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findFirst
   */
  export type PurchaseOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findFirstOrThrow
   */
  export type PurchaseOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findMany
   */
  export type PurchaseOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder create
   */
  export type PurchaseOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrder.
     */
    data: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
  }

  /**
   * PurchaseOrder createMany
   */
  export type PurchaseOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrder createManyAndReturn
   */
  export type PurchaseOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrder update
   */
  export type PurchaseOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrder.
     */
    data: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrder to update.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder updateMany
   */
  export type PurchaseOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrder updateManyAndReturn
   */
  export type PurchaseOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrder upsert
   */
  export type PurchaseOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrder to update in case it exists.
     */
    where: PurchaseOrderWhereUniqueInput
    /**
     * In case the PurchaseOrder found by the `where` argument doesn't exist, create a new PurchaseOrder with this data.
     */
    create: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
    /**
     * In case the PurchaseOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
  }

  /**
   * PurchaseOrder delete
   */
  export type PurchaseOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrder to delete.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder deleteMany
   */
  export type PurchaseOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrders to delete
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrder.approved_by
   */
  export type PurchaseOrder$approved_byArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PurchaseOrder.poitems
   */
  export type PurchaseOrder$poitemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsInclude<ExtArgs> | null
    where?: POItemsWhereInput
    orderBy?: POItemsOrderByWithRelationInput | POItemsOrderByWithRelationInput[]
    cursor?: POItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: POItemsScalarFieldEnum | POItemsScalarFieldEnum[]
  }

  /**
   * PurchaseOrder without action
   */
  export type PurchaseOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
  }


  /**
   * Model POItems
   */

  export type AggregatePOItems = {
    _count: POItemsCountAggregateOutputType | null
    _avg: POItemsAvgAggregateOutputType | null
    _sum: POItemsSumAggregateOutputType | null
    _min: POItemsMinAggregateOutputType | null
    _max: POItemsMaxAggregateOutputType | null
  }

  export type POItemsAvgAggregateOutputType = {
    id: number | null
    master_ref_id: number | null
    quantity: number | null
    rate: Decimal | null
  }

  export type POItemsSumAggregateOutputType = {
    id: number | null
    master_ref_id: number | null
    quantity: number | null
    rate: Decimal | null
  }

  export type POItemsMinAggregateOutputType = {
    id: number | null
    master_ref_id: number | null
    item: $Enums.Items | null
    quantity: number | null
    rate: Decimal | null
  }

  export type POItemsMaxAggregateOutputType = {
    id: number | null
    master_ref_id: number | null
    item: $Enums.Items | null
    quantity: number | null
    rate: Decimal | null
  }

  export type POItemsCountAggregateOutputType = {
    id: number
    master_ref_id: number
    item: number
    quantity: number
    rate: number
    _all: number
  }


  export type POItemsAvgAggregateInputType = {
    id?: true
    master_ref_id?: true
    quantity?: true
    rate?: true
  }

  export type POItemsSumAggregateInputType = {
    id?: true
    master_ref_id?: true
    quantity?: true
    rate?: true
  }

  export type POItemsMinAggregateInputType = {
    id?: true
    master_ref_id?: true
    item?: true
    quantity?: true
    rate?: true
  }

  export type POItemsMaxAggregateInputType = {
    id?: true
    master_ref_id?: true
    item?: true
    quantity?: true
    rate?: true
  }

  export type POItemsCountAggregateInputType = {
    id?: true
    master_ref_id?: true
    item?: true
    quantity?: true
    rate?: true
    _all?: true
  }

  export type POItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which POItems to aggregate.
     */
    where?: POItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POItems to fetch.
     */
    orderBy?: POItemsOrderByWithRelationInput | POItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: POItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned POItems
    **/
    _count?: true | POItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: POItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: POItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: POItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: POItemsMaxAggregateInputType
  }

  export type GetPOItemsAggregateType<T extends POItemsAggregateArgs> = {
        [P in keyof T & keyof AggregatePOItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePOItems[P]>
      : GetScalarType<T[P], AggregatePOItems[P]>
  }




  export type POItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POItemsWhereInput
    orderBy?: POItemsOrderByWithAggregationInput | POItemsOrderByWithAggregationInput[]
    by: POItemsScalarFieldEnum[] | POItemsScalarFieldEnum
    having?: POItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: POItemsCountAggregateInputType | true
    _avg?: POItemsAvgAggregateInputType
    _sum?: POItemsSumAggregateInputType
    _min?: POItemsMinAggregateInputType
    _max?: POItemsMaxAggregateInputType
  }

  export type POItemsGroupByOutputType = {
    id: number
    master_ref_id: number
    item: $Enums.Items
    quantity: number
    rate: Decimal
    _count: POItemsCountAggregateOutputType | null
    _avg: POItemsAvgAggregateOutputType | null
    _sum: POItemsSumAggregateOutputType | null
    _min: POItemsMinAggregateOutputType | null
    _max: POItemsMaxAggregateOutputType | null
  }

  type GetPOItemsGroupByPayload<T extends POItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<POItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof POItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], POItemsGroupByOutputType[P]>
            : GetScalarType<T[P], POItemsGroupByOutputType[P]>
        }
      >
    >


  export type POItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    master_ref_id?: boolean
    item?: boolean
    quantity?: boolean
    rate?: boolean
    master_ref?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOItems"]>

  export type POItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    master_ref_id?: boolean
    item?: boolean
    quantity?: boolean
    rate?: boolean
    master_ref?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOItems"]>

  export type POItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    master_ref_id?: boolean
    item?: boolean
    quantity?: boolean
    rate?: boolean
    master_ref?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOItems"]>

  export type POItemsSelectScalar = {
    id?: boolean
    master_ref_id?: boolean
    item?: boolean
    quantity?: boolean
    rate?: boolean
  }

  export type POItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "master_ref_id" | "item" | "quantity" | "rate", ExtArgs["result"]["pOItems"]>
  export type POItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    master_ref?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }
  export type POItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    master_ref?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }
  export type POItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    master_ref?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }

  export type $POItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "POItems"
    objects: {
      master_ref: Prisma.$PurchaseOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      master_ref_id: number
      item: $Enums.Items
      quantity: number
      rate: Prisma.Decimal
    }, ExtArgs["result"]["pOItems"]>
    composites: {}
  }

  type POItemsGetPayload<S extends boolean | null | undefined | POItemsDefaultArgs> = $Result.GetResult<Prisma.$POItemsPayload, S>

  type POItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<POItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: POItemsCountAggregateInputType | true
    }

  export interface POItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['POItems'], meta: { name: 'POItems' } }
    /**
     * Find zero or one POItems that matches the filter.
     * @param {POItemsFindUniqueArgs} args - Arguments to find a POItems
     * @example
     * // Get one POItems
     * const pOItems = await prisma.pOItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends POItemsFindUniqueArgs>(args: SelectSubset<T, POItemsFindUniqueArgs<ExtArgs>>): Prisma__POItemsClient<$Result.GetResult<Prisma.$POItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one POItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {POItemsFindUniqueOrThrowArgs} args - Arguments to find a POItems
     * @example
     * // Get one POItems
     * const pOItems = await prisma.pOItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends POItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, POItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__POItemsClient<$Result.GetResult<Prisma.$POItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first POItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POItemsFindFirstArgs} args - Arguments to find a POItems
     * @example
     * // Get one POItems
     * const pOItems = await prisma.pOItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends POItemsFindFirstArgs>(args?: SelectSubset<T, POItemsFindFirstArgs<ExtArgs>>): Prisma__POItemsClient<$Result.GetResult<Prisma.$POItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first POItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POItemsFindFirstOrThrowArgs} args - Arguments to find a POItems
     * @example
     * // Get one POItems
     * const pOItems = await prisma.pOItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends POItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, POItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__POItemsClient<$Result.GetResult<Prisma.$POItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more POItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all POItems
     * const pOItems = await prisma.pOItems.findMany()
     * 
     * // Get first 10 POItems
     * const pOItems = await prisma.pOItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pOItemsWithIdOnly = await prisma.pOItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends POItemsFindManyArgs>(args?: SelectSubset<T, POItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a POItems.
     * @param {POItemsCreateArgs} args - Arguments to create a POItems.
     * @example
     * // Create one POItems
     * const POItems = await prisma.pOItems.create({
     *   data: {
     *     // ... data to create a POItems
     *   }
     * })
     * 
     */
    create<T extends POItemsCreateArgs>(args: SelectSubset<T, POItemsCreateArgs<ExtArgs>>): Prisma__POItemsClient<$Result.GetResult<Prisma.$POItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many POItems.
     * @param {POItemsCreateManyArgs} args - Arguments to create many POItems.
     * @example
     * // Create many POItems
     * const pOItems = await prisma.pOItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends POItemsCreateManyArgs>(args?: SelectSubset<T, POItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many POItems and returns the data saved in the database.
     * @param {POItemsCreateManyAndReturnArgs} args - Arguments to create many POItems.
     * @example
     * // Create many POItems
     * const pOItems = await prisma.pOItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many POItems and only return the `id`
     * const pOItemsWithIdOnly = await prisma.pOItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends POItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, POItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a POItems.
     * @param {POItemsDeleteArgs} args - Arguments to delete one POItems.
     * @example
     * // Delete one POItems
     * const POItems = await prisma.pOItems.delete({
     *   where: {
     *     // ... filter to delete one POItems
     *   }
     * })
     * 
     */
    delete<T extends POItemsDeleteArgs>(args: SelectSubset<T, POItemsDeleteArgs<ExtArgs>>): Prisma__POItemsClient<$Result.GetResult<Prisma.$POItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one POItems.
     * @param {POItemsUpdateArgs} args - Arguments to update one POItems.
     * @example
     * // Update one POItems
     * const pOItems = await prisma.pOItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends POItemsUpdateArgs>(args: SelectSubset<T, POItemsUpdateArgs<ExtArgs>>): Prisma__POItemsClient<$Result.GetResult<Prisma.$POItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more POItems.
     * @param {POItemsDeleteManyArgs} args - Arguments to filter POItems to delete.
     * @example
     * // Delete a few POItems
     * const { count } = await prisma.pOItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends POItemsDeleteManyArgs>(args?: SelectSubset<T, POItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more POItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many POItems
     * const pOItems = await prisma.pOItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends POItemsUpdateManyArgs>(args: SelectSubset<T, POItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more POItems and returns the data updated in the database.
     * @param {POItemsUpdateManyAndReturnArgs} args - Arguments to update many POItems.
     * @example
     * // Update many POItems
     * const pOItems = await prisma.pOItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more POItems and only return the `id`
     * const pOItemsWithIdOnly = await prisma.pOItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends POItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, POItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one POItems.
     * @param {POItemsUpsertArgs} args - Arguments to update or create a POItems.
     * @example
     * // Update or create a POItems
     * const pOItems = await prisma.pOItems.upsert({
     *   create: {
     *     // ... data to create a POItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the POItems we want to update
     *   }
     * })
     */
    upsert<T extends POItemsUpsertArgs>(args: SelectSubset<T, POItemsUpsertArgs<ExtArgs>>): Prisma__POItemsClient<$Result.GetResult<Prisma.$POItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of POItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POItemsCountArgs} args - Arguments to filter POItems to count.
     * @example
     * // Count the number of POItems
     * const count = await prisma.pOItems.count({
     *   where: {
     *     // ... the filter for the POItems we want to count
     *   }
     * })
    **/
    count<T extends POItemsCountArgs>(
      args?: Subset<T, POItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], POItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a POItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends POItemsAggregateArgs>(args: Subset<T, POItemsAggregateArgs>): Prisma.PrismaPromise<GetPOItemsAggregateType<T>>

    /**
     * Group by POItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends POItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: POItemsGroupByArgs['orderBy'] }
        : { orderBy?: POItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, POItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPOItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the POItems model
   */
  readonly fields: POItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for POItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__POItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    master_ref<T extends PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrderDefaultArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the POItems model
   */
  interface POItemsFieldRefs {
    readonly id: FieldRef<"POItems", 'Int'>
    readonly master_ref_id: FieldRef<"POItems", 'Int'>
    readonly item: FieldRef<"POItems", 'Items'>
    readonly quantity: FieldRef<"POItems", 'Int'>
    readonly rate: FieldRef<"POItems", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * POItems findUnique
   */
  export type POItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsInclude<ExtArgs> | null
    /**
     * Filter, which POItems to fetch.
     */
    where: POItemsWhereUniqueInput
  }

  /**
   * POItems findUniqueOrThrow
   */
  export type POItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsInclude<ExtArgs> | null
    /**
     * Filter, which POItems to fetch.
     */
    where: POItemsWhereUniqueInput
  }

  /**
   * POItems findFirst
   */
  export type POItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsInclude<ExtArgs> | null
    /**
     * Filter, which POItems to fetch.
     */
    where?: POItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POItems to fetch.
     */
    orderBy?: POItemsOrderByWithRelationInput | POItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for POItems.
     */
    cursor?: POItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POItems.
     */
    distinct?: POItemsScalarFieldEnum | POItemsScalarFieldEnum[]
  }

  /**
   * POItems findFirstOrThrow
   */
  export type POItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsInclude<ExtArgs> | null
    /**
     * Filter, which POItems to fetch.
     */
    where?: POItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POItems to fetch.
     */
    orderBy?: POItemsOrderByWithRelationInput | POItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for POItems.
     */
    cursor?: POItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POItems.
     */
    distinct?: POItemsScalarFieldEnum | POItemsScalarFieldEnum[]
  }

  /**
   * POItems findMany
   */
  export type POItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsInclude<ExtArgs> | null
    /**
     * Filter, which POItems to fetch.
     */
    where?: POItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POItems to fetch.
     */
    orderBy?: POItemsOrderByWithRelationInput | POItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing POItems.
     */
    cursor?: POItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POItems.
     */
    distinct?: POItemsScalarFieldEnum | POItemsScalarFieldEnum[]
  }

  /**
   * POItems create
   */
  export type POItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a POItems.
     */
    data: XOR<POItemsCreateInput, POItemsUncheckedCreateInput>
  }

  /**
   * POItems createMany
   */
  export type POItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many POItems.
     */
    data: POItemsCreateManyInput | POItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * POItems createManyAndReturn
   */
  export type POItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * The data used to create many POItems.
     */
    data: POItemsCreateManyInput | POItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * POItems update
   */
  export type POItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a POItems.
     */
    data: XOR<POItemsUpdateInput, POItemsUncheckedUpdateInput>
    /**
     * Choose, which POItems to update.
     */
    where: POItemsWhereUniqueInput
  }

  /**
   * POItems updateMany
   */
  export type POItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update POItems.
     */
    data: XOR<POItemsUpdateManyMutationInput, POItemsUncheckedUpdateManyInput>
    /**
     * Filter which POItems to update
     */
    where?: POItemsWhereInput
    /**
     * Limit how many POItems to update.
     */
    limit?: number
  }

  /**
   * POItems updateManyAndReturn
   */
  export type POItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * The data used to update POItems.
     */
    data: XOR<POItemsUpdateManyMutationInput, POItemsUncheckedUpdateManyInput>
    /**
     * Filter which POItems to update
     */
    where?: POItemsWhereInput
    /**
     * Limit how many POItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * POItems upsert
   */
  export type POItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the POItems to update in case it exists.
     */
    where: POItemsWhereUniqueInput
    /**
     * In case the POItems found by the `where` argument doesn't exist, create a new POItems with this data.
     */
    create: XOR<POItemsCreateInput, POItemsUncheckedCreateInput>
    /**
     * In case the POItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<POItemsUpdateInput, POItemsUncheckedUpdateInput>
  }

  /**
   * POItems delete
   */
  export type POItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsInclude<ExtArgs> | null
    /**
     * Filter which POItems to delete.
     */
    where: POItemsWhereUniqueInput
  }

  /**
   * POItems deleteMany
   */
  export type POItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which POItems to delete
     */
    where?: POItemsWhereInput
    /**
     * Limit how many POItems to delete.
     */
    limit?: number
  }

  /**
   * POItems without action
   */
  export type POItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POItems
     */
    select?: POItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POItems
     */
    omit?: POItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POItemsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    is_active: 'is_active',
    is_verified: 'is_verified',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PurchaseOrderScalarFieldEnum: {
    id: 'id',
    po_number: 'po_number',
    vendor: 'vendor',
    vendor_address: 'vendor_address',
    status: 'status',
    payment_mode: 'payment_mode',
    payment_amount: 'payment_amount',
    payment_reference: 'payment_reference',
    additional_details: 'additional_details',
    requested_at: 'requested_at',
    requested_by_id: 'requested_by_id',
    approved_at: 'approved_at',
    approved_by_id: 'approved_by_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PurchaseOrderScalarFieldEnum = (typeof PurchaseOrderScalarFieldEnum)[keyof typeof PurchaseOrderScalarFieldEnum]


  export const POItemsScalarFieldEnum: {
    id: 'id',
    master_ref_id: 'master_ref_id',
    item: 'item',
    quantity: 'quantity',
    rate: 'rate'
  };

  export type POItemsScalarFieldEnum = (typeof POItemsScalarFieldEnum)[keyof typeof POItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRoles'
   */
  export type EnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoles'>
    


  /**
   * Reference to a field of type 'UserRoles[]'
   */
  export type ListEnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoles[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PurchaseStatus'
   */
  export type EnumPurchaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseStatus'>
    


  /**
   * Reference to a field of type 'PurchaseStatus[]'
   */
  export type ListEnumPurchaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PurchaseStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentModes'
   */
  export type EnumPaymentModesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentModes'>
    


  /**
   * Reference to a field of type 'PaymentModes[]'
   */
  export type ListEnumPaymentModesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentModes[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Items'
   */
  export type EnumItemsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Items'>
    


  /**
   * Reference to a field of type 'Items[]'
   */
  export type ListEnumItemsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Items[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    is_verified?: BoolFilter<"User"> | boolean
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    po_req_user?: PurchaseOrderListRelationFilter
    po_app_user?: PurchaseOrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    is_active?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    po_req_user?: PurchaseOrderOrderByRelationAggregateInput
    po_app_user?: PurchaseOrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    is_verified?: BoolFilter<"User"> | boolean
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    po_req_user?: PurchaseOrderListRelationFilter
    po_app_user?: PurchaseOrderListRelationFilter
  }, "id" | "email" | "username" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    is_active?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumUserRolesWithAggregatesFilter<"User"> | $Enums.UserRoles
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PurchaseOrderWhereInput = {
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    id?: IntFilter<"PurchaseOrder"> | number
    po_number?: StringFilter<"PurchaseOrder"> | string
    vendor?: StringFilter<"PurchaseOrder"> | string
    vendor_address?: StringNullableFilter<"PurchaseOrder"> | string | null
    status?: EnumPurchaseStatusFilter<"PurchaseOrder"> | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFilter<"PurchaseOrder"> | $Enums.PaymentModes
    payment_amount?: DecimalFilter<"PurchaseOrder"> | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFilter<"PurchaseOrder"> | string
    additional_details?: JsonNullableFilter<"PurchaseOrder">
    requested_at?: DateTimeFilter<"PurchaseOrder"> | Date | string
    requested_by_id?: IntFilter<"PurchaseOrder"> | number
    approved_at?: DateTimeNullableFilter<"PurchaseOrder"> | Date | string | null
    approved_by_id?: IntNullableFilter<"PurchaseOrder"> | number | null
    created_at?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updated_at?: DateTimeFilter<"PurchaseOrder"> | Date | string
    requested_by?: XOR<UserScalarRelationFilter, UserWhereInput>
    approved_by?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    poitems?: POItemsListRelationFilter
  }

  export type PurchaseOrderOrderByWithRelationInput = {
    id?: SortOrder
    po_number?: SortOrder
    vendor?: SortOrder
    vendor_address?: SortOrderInput | SortOrder
    status?: SortOrder
    payment_mode?: SortOrder
    payment_amount?: SortOrder
    payment_reference?: SortOrder
    additional_details?: SortOrderInput | SortOrder
    requested_at?: SortOrder
    requested_by_id?: SortOrder
    approved_at?: SortOrderInput | SortOrder
    approved_by_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    requested_by?: UserOrderByWithRelationInput
    approved_by?: UserOrderByWithRelationInput
    poitems?: POItemsOrderByRelationAggregateInput
  }

  export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    po_number?: string
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    vendor?: StringFilter<"PurchaseOrder"> | string
    vendor_address?: StringNullableFilter<"PurchaseOrder"> | string | null
    status?: EnumPurchaseStatusFilter<"PurchaseOrder"> | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFilter<"PurchaseOrder"> | $Enums.PaymentModes
    payment_amount?: DecimalFilter<"PurchaseOrder"> | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFilter<"PurchaseOrder"> | string
    additional_details?: JsonNullableFilter<"PurchaseOrder">
    requested_at?: DateTimeFilter<"PurchaseOrder"> | Date | string
    requested_by_id?: IntFilter<"PurchaseOrder"> | number
    approved_at?: DateTimeNullableFilter<"PurchaseOrder"> | Date | string | null
    approved_by_id?: IntNullableFilter<"PurchaseOrder"> | number | null
    created_at?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updated_at?: DateTimeFilter<"PurchaseOrder"> | Date | string
    requested_by?: XOR<UserScalarRelationFilter, UserWhereInput>
    approved_by?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    poitems?: POItemsListRelationFilter
  }, "id" | "po_number">

  export type PurchaseOrderOrderByWithAggregationInput = {
    id?: SortOrder
    po_number?: SortOrder
    vendor?: SortOrder
    vendor_address?: SortOrderInput | SortOrder
    status?: SortOrder
    payment_mode?: SortOrder
    payment_amount?: SortOrder
    payment_reference?: SortOrder
    additional_details?: SortOrderInput | SortOrder
    requested_at?: SortOrder
    requested_by_id?: SortOrder
    approved_at?: SortOrderInput | SortOrder
    approved_by_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PurchaseOrderCountOrderByAggregateInput
    _avg?: PurchaseOrderAvgOrderByAggregateInput
    _max?: PurchaseOrderMaxOrderByAggregateInput
    _min?: PurchaseOrderMinOrderByAggregateInput
    _sum?: PurchaseOrderSumOrderByAggregateInput
  }

  export type PurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    po_number?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    vendor?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    vendor_address?: StringNullableWithAggregatesFilter<"PurchaseOrder"> | string | null
    status?: EnumPurchaseStatusWithAggregatesFilter<"PurchaseOrder"> | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesWithAggregatesFilter<"PurchaseOrder"> | $Enums.PaymentModes
    payment_amount?: DecimalWithAggregatesFilter<"PurchaseOrder"> | Decimal | DecimalJsLike | number | string
    payment_reference?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    additional_details?: JsonNullableWithAggregatesFilter<"PurchaseOrder">
    requested_at?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    requested_by_id?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    approved_at?: DateTimeNullableWithAggregatesFilter<"PurchaseOrder"> | Date | string | null
    approved_by_id?: IntNullableWithAggregatesFilter<"PurchaseOrder"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
  }

  export type POItemsWhereInput = {
    AND?: POItemsWhereInput | POItemsWhereInput[]
    OR?: POItemsWhereInput[]
    NOT?: POItemsWhereInput | POItemsWhereInput[]
    id?: IntFilter<"POItems"> | number
    master_ref_id?: IntFilter<"POItems"> | number
    item?: EnumItemsFilter<"POItems"> | $Enums.Items
    quantity?: IntFilter<"POItems"> | number
    rate?: DecimalFilter<"POItems"> | Decimal | DecimalJsLike | number | string
    master_ref?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
  }

  export type POItemsOrderByWithRelationInput = {
    id?: SortOrder
    master_ref_id?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    master_ref?: PurchaseOrderOrderByWithRelationInput
  }

  export type POItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: POItemsWhereInput | POItemsWhereInput[]
    OR?: POItemsWhereInput[]
    NOT?: POItemsWhereInput | POItemsWhereInput[]
    master_ref_id?: IntFilter<"POItems"> | number
    item?: EnumItemsFilter<"POItems"> | $Enums.Items
    quantity?: IntFilter<"POItems"> | number
    rate?: DecimalFilter<"POItems"> | Decimal | DecimalJsLike | number | string
    master_ref?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
  }, "id">

  export type POItemsOrderByWithAggregationInput = {
    id?: SortOrder
    master_ref_id?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    _count?: POItemsCountOrderByAggregateInput
    _avg?: POItemsAvgOrderByAggregateInput
    _max?: POItemsMaxOrderByAggregateInput
    _min?: POItemsMinOrderByAggregateInput
    _sum?: POItemsSumOrderByAggregateInput
  }

  export type POItemsScalarWhereWithAggregatesInput = {
    AND?: POItemsScalarWhereWithAggregatesInput | POItemsScalarWhereWithAggregatesInput[]
    OR?: POItemsScalarWhereWithAggregatesInput[]
    NOT?: POItemsScalarWhereWithAggregatesInput | POItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"POItems"> | number
    master_ref_id?: IntWithAggregatesFilter<"POItems"> | number
    item?: EnumItemsWithAggregatesFilter<"POItems"> | $Enums.Items
    quantity?: IntWithAggregatesFilter<"POItems"> | number
    rate?: DecimalWithAggregatesFilter<"POItems"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateInput = {
    email: string
    username: string
    password: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_active?: boolean
    is_verified?: boolean
    role?: $Enums.UserRoles
    created_at?: Date | string
    updated_at?: Date | string
    po_req_user?: PurchaseOrderCreateNestedManyWithoutRequested_byInput
    po_app_user?: PurchaseOrderCreateNestedManyWithoutApproved_byInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_active?: boolean
    is_verified?: boolean
    role?: $Enums.UserRoles
    created_at?: Date | string
    updated_at?: Date | string
    po_req_user?: PurchaseOrderUncheckedCreateNestedManyWithoutRequested_byInput
    po_app_user?: PurchaseOrderUncheckedCreateNestedManyWithoutApproved_byInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    po_req_user?: PurchaseOrderUpdateManyWithoutRequested_byNestedInput
    po_app_user?: PurchaseOrderUpdateManyWithoutApproved_byNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    po_req_user?: PurchaseOrderUncheckedUpdateManyWithoutRequested_byNestedInput
    po_app_user?: PurchaseOrderUncheckedUpdateManyWithoutApproved_byNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_active?: boolean
    is_verified?: boolean
    role?: $Enums.UserRoles
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderCreateInput = {
    po_number?: string
    vendor: string
    vendor_address?: string | null
    status?: $Enums.PurchaseStatus
    payment_mode: $Enums.PaymentModes
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_reference: string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: Date | string
    approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    requested_by: UserCreateNestedOneWithoutPo_req_userInput
    approved_by?: UserCreateNestedOneWithoutPo_app_userInput
    poitems?: POItemsCreateNestedManyWithoutMaster_refInput
  }

  export type PurchaseOrderUncheckedCreateInput = {
    id?: number
    po_number?: string
    vendor: string
    vendor_address?: string | null
    status?: $Enums.PurchaseStatus
    payment_mode: $Enums.PaymentModes
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_reference: string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: Date | string
    requested_by_id: number
    approved_at?: Date | string | null
    approved_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    poitems?: POItemsUncheckedCreateNestedManyWithoutMaster_refInput
  }

  export type PurchaseOrderUpdateInput = {
    po_number?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    vendor_address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFieldUpdateOperationsInput | $Enums.PaymentModes
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFieldUpdateOperationsInput | string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requested_by?: UserUpdateOneRequiredWithoutPo_req_userNestedInput
    approved_by?: UserUpdateOneWithoutPo_app_userNestedInput
    poitems?: POItemsUpdateManyWithoutMaster_refNestedInput
  }

  export type PurchaseOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    po_number?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    vendor_address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFieldUpdateOperationsInput | $Enums.PaymentModes
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFieldUpdateOperationsInput | string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requested_by_id?: IntFieldUpdateOperationsInput | number
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    poitems?: POItemsUncheckedUpdateManyWithoutMaster_refNestedInput
  }

  export type PurchaseOrderCreateManyInput = {
    id?: number
    po_number?: string
    vendor: string
    vendor_address?: string | null
    status?: $Enums.PurchaseStatus
    payment_mode: $Enums.PaymentModes
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_reference: string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: Date | string
    requested_by_id: number
    approved_at?: Date | string | null
    approved_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PurchaseOrderUpdateManyMutationInput = {
    po_number?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    vendor_address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFieldUpdateOperationsInput | $Enums.PaymentModes
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFieldUpdateOperationsInput | string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    po_number?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    vendor_address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFieldUpdateOperationsInput | $Enums.PaymentModes
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFieldUpdateOperationsInput | string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requested_by_id?: IntFieldUpdateOperationsInput | number
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POItemsCreateInput = {
    item: $Enums.Items
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    master_ref: PurchaseOrderCreateNestedOneWithoutPoitemsInput
  }

  export type POItemsUncheckedCreateInput = {
    id?: number
    master_ref_id: number
    item: $Enums.Items
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
  }

  export type POItemsUpdateInput = {
    item?: EnumItemsFieldUpdateOperationsInput | $Enums.Items
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    master_ref?: PurchaseOrderUpdateOneRequiredWithoutPoitemsNestedInput
  }

  export type POItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    master_ref_id?: IntFieldUpdateOperationsInput | number
    item?: EnumItemsFieldUpdateOperationsInput | $Enums.Items
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type POItemsCreateManyInput = {
    id?: number
    master_ref_id: number
    item: $Enums.Items
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
  }

  export type POItemsUpdateManyMutationInput = {
    item?: EnumItemsFieldUpdateOperationsInput | $Enums.Items
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type POItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    master_ref_id?: IntFieldUpdateOperationsInput | number
    item?: EnumItemsFieldUpdateOperationsInput | $Enums.Items
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PurchaseOrderListRelationFilter = {
    every?: PurchaseOrderWhereInput
    some?: PurchaseOrderWhereInput
    none?: PurchaseOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PurchaseOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPurchaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseStatus | EnumPurchaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseStatusFilter<$PrismaModel> | $Enums.PurchaseStatus
  }

  export type EnumPaymentModesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentModes | EnumPaymentModesFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentModes[] | ListEnumPaymentModesFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentModes[] | ListEnumPaymentModesFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentModesFilter<$PrismaModel> | $Enums.PaymentModes
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type POItemsListRelationFilter = {
    every?: POItemsWhereInput
    some?: POItemsWhereInput
    none?: POItemsWhereInput
  }

  export type POItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderCountOrderByAggregateInput = {
    id?: SortOrder
    po_number?: SortOrder
    vendor?: SortOrder
    vendor_address?: SortOrder
    status?: SortOrder
    payment_mode?: SortOrder
    payment_amount?: SortOrder
    payment_reference?: SortOrder
    additional_details?: SortOrder
    requested_at?: SortOrder
    requested_by_id?: SortOrder
    approved_at?: SortOrder
    approved_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PurchaseOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    payment_amount?: SortOrder
    requested_by_id?: SortOrder
    approved_by_id?: SortOrder
  }

  export type PurchaseOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    po_number?: SortOrder
    vendor?: SortOrder
    vendor_address?: SortOrder
    status?: SortOrder
    payment_mode?: SortOrder
    payment_amount?: SortOrder
    payment_reference?: SortOrder
    requested_at?: SortOrder
    requested_by_id?: SortOrder
    approved_at?: SortOrder
    approved_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PurchaseOrderMinOrderByAggregateInput = {
    id?: SortOrder
    po_number?: SortOrder
    vendor?: SortOrder
    vendor_address?: SortOrder
    status?: SortOrder
    payment_mode?: SortOrder
    payment_amount?: SortOrder
    payment_reference?: SortOrder
    requested_at?: SortOrder
    requested_by_id?: SortOrder
    approved_at?: SortOrder
    approved_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PurchaseOrderSumOrderByAggregateInput = {
    id?: SortOrder
    payment_amount?: SortOrder
    requested_by_id?: SortOrder
    approved_by_id?: SortOrder
  }

  export type EnumPurchaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseStatus | EnumPurchaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseStatusFilter<$PrismaModel>
  }

  export type EnumPaymentModesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentModes | EnumPaymentModesFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentModes[] | ListEnumPaymentModesFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentModes[] | ListEnumPaymentModesFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentModesWithAggregatesFilter<$PrismaModel> | $Enums.PaymentModes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentModesFilter<$PrismaModel>
    _max?: NestedEnumPaymentModesFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumItemsFilter<$PrismaModel = never> = {
    equals?: $Enums.Items | EnumItemsFieldRefInput<$PrismaModel>
    in?: $Enums.Items[] | ListEnumItemsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Items[] | ListEnumItemsFieldRefInput<$PrismaModel>
    not?: NestedEnumItemsFilter<$PrismaModel> | $Enums.Items
  }

  export type PurchaseOrderScalarRelationFilter = {
    is?: PurchaseOrderWhereInput
    isNot?: PurchaseOrderWhereInput
  }

  export type POItemsCountOrderByAggregateInput = {
    id?: SortOrder
    master_ref_id?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
  }

  export type POItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    master_ref_id?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
  }

  export type POItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    master_ref_id?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
  }

  export type POItemsMinOrderByAggregateInput = {
    id?: SortOrder
    master_ref_id?: SortOrder
    item?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
  }

  export type POItemsSumOrderByAggregateInput = {
    id?: SortOrder
    master_ref_id?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
  }

  export type EnumItemsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Items | EnumItemsFieldRefInput<$PrismaModel>
    in?: $Enums.Items[] | ListEnumItemsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Items[] | ListEnumItemsFieldRefInput<$PrismaModel>
    not?: NestedEnumItemsWithAggregatesFilter<$PrismaModel> | $Enums.Items
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemsFilter<$PrismaModel>
    _max?: NestedEnumItemsFilter<$PrismaModel>
  }

  export type PurchaseOrderCreateNestedManyWithoutRequested_byInput = {
    create?: XOR<PurchaseOrderCreateWithoutRequested_byInput, PurchaseOrderUncheckedCreateWithoutRequested_byInput> | PurchaseOrderCreateWithoutRequested_byInput[] | PurchaseOrderUncheckedCreateWithoutRequested_byInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutRequested_byInput | PurchaseOrderCreateOrConnectWithoutRequested_byInput[]
    createMany?: PurchaseOrderCreateManyRequested_byInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type PurchaseOrderCreateNestedManyWithoutApproved_byInput = {
    create?: XOR<PurchaseOrderCreateWithoutApproved_byInput, PurchaseOrderUncheckedCreateWithoutApproved_byInput> | PurchaseOrderCreateWithoutApproved_byInput[] | PurchaseOrderUncheckedCreateWithoutApproved_byInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutApproved_byInput | PurchaseOrderCreateOrConnectWithoutApproved_byInput[]
    createMany?: PurchaseOrderCreateManyApproved_byInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type PurchaseOrderUncheckedCreateNestedManyWithoutRequested_byInput = {
    create?: XOR<PurchaseOrderCreateWithoutRequested_byInput, PurchaseOrderUncheckedCreateWithoutRequested_byInput> | PurchaseOrderCreateWithoutRequested_byInput[] | PurchaseOrderUncheckedCreateWithoutRequested_byInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutRequested_byInput | PurchaseOrderCreateOrConnectWithoutRequested_byInput[]
    createMany?: PurchaseOrderCreateManyRequested_byInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type PurchaseOrderUncheckedCreateNestedManyWithoutApproved_byInput = {
    create?: XOR<PurchaseOrderCreateWithoutApproved_byInput, PurchaseOrderUncheckedCreateWithoutApproved_byInput> | PurchaseOrderCreateWithoutApproved_byInput[] | PurchaseOrderUncheckedCreateWithoutApproved_byInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutApproved_byInput | PurchaseOrderCreateOrConnectWithoutApproved_byInput[]
    createMany?: PurchaseOrderCreateManyApproved_byInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserRolesFieldUpdateOperationsInput = {
    set?: $Enums.UserRoles
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PurchaseOrderUpdateManyWithoutRequested_byNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutRequested_byInput, PurchaseOrderUncheckedCreateWithoutRequested_byInput> | PurchaseOrderCreateWithoutRequested_byInput[] | PurchaseOrderUncheckedCreateWithoutRequested_byInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutRequested_byInput | PurchaseOrderCreateOrConnectWithoutRequested_byInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutRequested_byInput | PurchaseOrderUpsertWithWhereUniqueWithoutRequested_byInput[]
    createMany?: PurchaseOrderCreateManyRequested_byInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutRequested_byInput | PurchaseOrderUpdateWithWhereUniqueWithoutRequested_byInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutRequested_byInput | PurchaseOrderUpdateManyWithWhereWithoutRequested_byInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type PurchaseOrderUpdateManyWithoutApproved_byNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutApproved_byInput, PurchaseOrderUncheckedCreateWithoutApproved_byInput> | PurchaseOrderCreateWithoutApproved_byInput[] | PurchaseOrderUncheckedCreateWithoutApproved_byInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutApproved_byInput | PurchaseOrderCreateOrConnectWithoutApproved_byInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutApproved_byInput | PurchaseOrderUpsertWithWhereUniqueWithoutApproved_byInput[]
    createMany?: PurchaseOrderCreateManyApproved_byInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutApproved_byInput | PurchaseOrderUpdateWithWhereUniqueWithoutApproved_byInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutApproved_byInput | PurchaseOrderUpdateManyWithWhereWithoutApproved_byInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutRequested_byNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutRequested_byInput, PurchaseOrderUncheckedCreateWithoutRequested_byInput> | PurchaseOrderCreateWithoutRequested_byInput[] | PurchaseOrderUncheckedCreateWithoutRequested_byInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutRequested_byInput | PurchaseOrderCreateOrConnectWithoutRequested_byInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutRequested_byInput | PurchaseOrderUpsertWithWhereUniqueWithoutRequested_byInput[]
    createMany?: PurchaseOrderCreateManyRequested_byInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutRequested_byInput | PurchaseOrderUpdateWithWhereUniqueWithoutRequested_byInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutRequested_byInput | PurchaseOrderUpdateManyWithWhereWithoutRequested_byInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutApproved_byNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutApproved_byInput, PurchaseOrderUncheckedCreateWithoutApproved_byInput> | PurchaseOrderCreateWithoutApproved_byInput[] | PurchaseOrderUncheckedCreateWithoutApproved_byInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutApproved_byInput | PurchaseOrderCreateOrConnectWithoutApproved_byInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutApproved_byInput | PurchaseOrderUpsertWithWhereUniqueWithoutApproved_byInput[]
    createMany?: PurchaseOrderCreateManyApproved_byInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutApproved_byInput | PurchaseOrderUpdateWithWhereUniqueWithoutApproved_byInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutApproved_byInput | PurchaseOrderUpdateManyWithWhereWithoutApproved_byInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPo_req_userInput = {
    create?: XOR<UserCreateWithoutPo_req_userInput, UserUncheckedCreateWithoutPo_req_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutPo_req_userInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPo_app_userInput = {
    create?: XOR<UserCreateWithoutPo_app_userInput, UserUncheckedCreateWithoutPo_app_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutPo_app_userInput
    connect?: UserWhereUniqueInput
  }

  export type POItemsCreateNestedManyWithoutMaster_refInput = {
    create?: XOR<POItemsCreateWithoutMaster_refInput, POItemsUncheckedCreateWithoutMaster_refInput> | POItemsCreateWithoutMaster_refInput[] | POItemsUncheckedCreateWithoutMaster_refInput[]
    connectOrCreate?: POItemsCreateOrConnectWithoutMaster_refInput | POItemsCreateOrConnectWithoutMaster_refInput[]
    createMany?: POItemsCreateManyMaster_refInputEnvelope
    connect?: POItemsWhereUniqueInput | POItemsWhereUniqueInput[]
  }

  export type POItemsUncheckedCreateNestedManyWithoutMaster_refInput = {
    create?: XOR<POItemsCreateWithoutMaster_refInput, POItemsUncheckedCreateWithoutMaster_refInput> | POItemsCreateWithoutMaster_refInput[] | POItemsUncheckedCreateWithoutMaster_refInput[]
    connectOrCreate?: POItemsCreateOrConnectWithoutMaster_refInput | POItemsCreateOrConnectWithoutMaster_refInput[]
    createMany?: POItemsCreateManyMaster_refInputEnvelope
    connect?: POItemsWhereUniqueInput | POItemsWhereUniqueInput[]
  }

  export type EnumPurchaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.PurchaseStatus
  }

  export type EnumPaymentModesFieldUpdateOperationsInput = {
    set?: $Enums.PaymentModes
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPo_req_userNestedInput = {
    create?: XOR<UserCreateWithoutPo_req_userInput, UserUncheckedCreateWithoutPo_req_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutPo_req_userInput
    upsert?: UserUpsertWithoutPo_req_userInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPo_req_userInput, UserUpdateWithoutPo_req_userInput>, UserUncheckedUpdateWithoutPo_req_userInput>
  }

  export type UserUpdateOneWithoutPo_app_userNestedInput = {
    create?: XOR<UserCreateWithoutPo_app_userInput, UserUncheckedCreateWithoutPo_app_userInput>
    connectOrCreate?: UserCreateOrConnectWithoutPo_app_userInput
    upsert?: UserUpsertWithoutPo_app_userInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPo_app_userInput, UserUpdateWithoutPo_app_userInput>, UserUncheckedUpdateWithoutPo_app_userInput>
  }

  export type POItemsUpdateManyWithoutMaster_refNestedInput = {
    create?: XOR<POItemsCreateWithoutMaster_refInput, POItemsUncheckedCreateWithoutMaster_refInput> | POItemsCreateWithoutMaster_refInput[] | POItemsUncheckedCreateWithoutMaster_refInput[]
    connectOrCreate?: POItemsCreateOrConnectWithoutMaster_refInput | POItemsCreateOrConnectWithoutMaster_refInput[]
    upsert?: POItemsUpsertWithWhereUniqueWithoutMaster_refInput | POItemsUpsertWithWhereUniqueWithoutMaster_refInput[]
    createMany?: POItemsCreateManyMaster_refInputEnvelope
    set?: POItemsWhereUniqueInput | POItemsWhereUniqueInput[]
    disconnect?: POItemsWhereUniqueInput | POItemsWhereUniqueInput[]
    delete?: POItemsWhereUniqueInput | POItemsWhereUniqueInput[]
    connect?: POItemsWhereUniqueInput | POItemsWhereUniqueInput[]
    update?: POItemsUpdateWithWhereUniqueWithoutMaster_refInput | POItemsUpdateWithWhereUniqueWithoutMaster_refInput[]
    updateMany?: POItemsUpdateManyWithWhereWithoutMaster_refInput | POItemsUpdateManyWithWhereWithoutMaster_refInput[]
    deleteMany?: POItemsScalarWhereInput | POItemsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type POItemsUncheckedUpdateManyWithoutMaster_refNestedInput = {
    create?: XOR<POItemsCreateWithoutMaster_refInput, POItemsUncheckedCreateWithoutMaster_refInput> | POItemsCreateWithoutMaster_refInput[] | POItemsUncheckedCreateWithoutMaster_refInput[]
    connectOrCreate?: POItemsCreateOrConnectWithoutMaster_refInput | POItemsCreateOrConnectWithoutMaster_refInput[]
    upsert?: POItemsUpsertWithWhereUniqueWithoutMaster_refInput | POItemsUpsertWithWhereUniqueWithoutMaster_refInput[]
    createMany?: POItemsCreateManyMaster_refInputEnvelope
    set?: POItemsWhereUniqueInput | POItemsWhereUniqueInput[]
    disconnect?: POItemsWhereUniqueInput | POItemsWhereUniqueInput[]
    delete?: POItemsWhereUniqueInput | POItemsWhereUniqueInput[]
    connect?: POItemsWhereUniqueInput | POItemsWhereUniqueInput[]
    update?: POItemsUpdateWithWhereUniqueWithoutMaster_refInput | POItemsUpdateWithWhereUniqueWithoutMaster_refInput[]
    updateMany?: POItemsUpdateManyWithWhereWithoutMaster_refInput | POItemsUpdateManyWithWhereWithoutMaster_refInput[]
    deleteMany?: POItemsScalarWhereInput | POItemsScalarWhereInput[]
  }

  export type PurchaseOrderCreateNestedOneWithoutPoitemsInput = {
    create?: XOR<PurchaseOrderCreateWithoutPoitemsInput, PurchaseOrderUncheckedCreateWithoutPoitemsInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutPoitemsInput
    connect?: PurchaseOrderWhereUniqueInput
  }

  export type EnumItemsFieldUpdateOperationsInput = {
    set?: $Enums.Items
  }

  export type PurchaseOrderUpdateOneRequiredWithoutPoitemsNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutPoitemsInput, PurchaseOrderUncheckedCreateWithoutPoitemsInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutPoitemsInput
    upsert?: PurchaseOrderUpsertWithoutPoitemsInput
    connect?: PurchaseOrderWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderUpdateToOneWithWhereWithoutPoitemsInput, PurchaseOrderUpdateWithoutPoitemsInput>, PurchaseOrderUncheckedUpdateWithoutPoitemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPurchaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseStatus | EnumPurchaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseStatusFilter<$PrismaModel> | $Enums.PurchaseStatus
  }

  export type NestedEnumPaymentModesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentModes | EnumPaymentModesFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentModes[] | ListEnumPaymentModesFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentModes[] | ListEnumPaymentModesFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentModesFilter<$PrismaModel> | $Enums.PaymentModes
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPurchaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PurchaseStatus | EnumPurchaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PurchaseStatus[] | ListEnumPurchaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPurchaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.PurchaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPurchaseStatusFilter<$PrismaModel>
    _max?: NestedEnumPurchaseStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentModesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentModes | EnumPaymentModesFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentModes[] | ListEnumPaymentModesFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentModes[] | ListEnumPaymentModesFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentModesWithAggregatesFilter<$PrismaModel> | $Enums.PaymentModes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentModesFilter<$PrismaModel>
    _max?: NestedEnumPaymentModesFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumItemsFilter<$PrismaModel = never> = {
    equals?: $Enums.Items | EnumItemsFieldRefInput<$PrismaModel>
    in?: $Enums.Items[] | ListEnumItemsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Items[] | ListEnumItemsFieldRefInput<$PrismaModel>
    not?: NestedEnumItemsFilter<$PrismaModel> | $Enums.Items
  }

  export type NestedEnumItemsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Items | EnumItemsFieldRefInput<$PrismaModel>
    in?: $Enums.Items[] | ListEnumItemsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Items[] | ListEnumItemsFieldRefInput<$PrismaModel>
    not?: NestedEnumItemsWithAggregatesFilter<$PrismaModel> | $Enums.Items
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemsFilter<$PrismaModel>
    _max?: NestedEnumItemsFilter<$PrismaModel>
  }

  export type PurchaseOrderCreateWithoutRequested_byInput = {
    po_number?: string
    vendor: string
    vendor_address?: string | null
    status?: $Enums.PurchaseStatus
    payment_mode: $Enums.PaymentModes
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_reference: string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: Date | string
    approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    approved_by?: UserCreateNestedOneWithoutPo_app_userInput
    poitems?: POItemsCreateNestedManyWithoutMaster_refInput
  }

  export type PurchaseOrderUncheckedCreateWithoutRequested_byInput = {
    id?: number
    po_number?: string
    vendor: string
    vendor_address?: string | null
    status?: $Enums.PurchaseStatus
    payment_mode: $Enums.PaymentModes
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_reference: string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: Date | string
    approved_at?: Date | string | null
    approved_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    poitems?: POItemsUncheckedCreateNestedManyWithoutMaster_refInput
  }

  export type PurchaseOrderCreateOrConnectWithoutRequested_byInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutRequested_byInput, PurchaseOrderUncheckedCreateWithoutRequested_byInput>
  }

  export type PurchaseOrderCreateManyRequested_byInputEnvelope = {
    data: PurchaseOrderCreateManyRequested_byInput | PurchaseOrderCreateManyRequested_byInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseOrderCreateWithoutApproved_byInput = {
    po_number?: string
    vendor: string
    vendor_address?: string | null
    status?: $Enums.PurchaseStatus
    payment_mode: $Enums.PaymentModes
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_reference: string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: Date | string
    approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    requested_by: UserCreateNestedOneWithoutPo_req_userInput
    poitems?: POItemsCreateNestedManyWithoutMaster_refInput
  }

  export type PurchaseOrderUncheckedCreateWithoutApproved_byInput = {
    id?: number
    po_number?: string
    vendor: string
    vendor_address?: string | null
    status?: $Enums.PurchaseStatus
    payment_mode: $Enums.PaymentModes
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_reference: string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: Date | string
    requested_by_id: number
    approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    poitems?: POItemsUncheckedCreateNestedManyWithoutMaster_refInput
  }

  export type PurchaseOrderCreateOrConnectWithoutApproved_byInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutApproved_byInput, PurchaseOrderUncheckedCreateWithoutApproved_byInput>
  }

  export type PurchaseOrderCreateManyApproved_byInputEnvelope = {
    data: PurchaseOrderCreateManyApproved_byInput | PurchaseOrderCreateManyApproved_byInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseOrderUpsertWithWhereUniqueWithoutRequested_byInput = {
    where: PurchaseOrderWhereUniqueInput
    update: XOR<PurchaseOrderUpdateWithoutRequested_byInput, PurchaseOrderUncheckedUpdateWithoutRequested_byInput>
    create: XOR<PurchaseOrderCreateWithoutRequested_byInput, PurchaseOrderUncheckedCreateWithoutRequested_byInput>
  }

  export type PurchaseOrderUpdateWithWhereUniqueWithoutRequested_byInput = {
    where: PurchaseOrderWhereUniqueInput
    data: XOR<PurchaseOrderUpdateWithoutRequested_byInput, PurchaseOrderUncheckedUpdateWithoutRequested_byInput>
  }

  export type PurchaseOrderUpdateManyWithWhereWithoutRequested_byInput = {
    where: PurchaseOrderScalarWhereInput
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyWithoutRequested_byInput>
  }

  export type PurchaseOrderScalarWhereInput = {
    AND?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
    OR?: PurchaseOrderScalarWhereInput[]
    NOT?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
    id?: IntFilter<"PurchaseOrder"> | number
    po_number?: StringFilter<"PurchaseOrder"> | string
    vendor?: StringFilter<"PurchaseOrder"> | string
    vendor_address?: StringNullableFilter<"PurchaseOrder"> | string | null
    status?: EnumPurchaseStatusFilter<"PurchaseOrder"> | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFilter<"PurchaseOrder"> | $Enums.PaymentModes
    payment_amount?: DecimalFilter<"PurchaseOrder"> | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFilter<"PurchaseOrder"> | string
    additional_details?: JsonNullableFilter<"PurchaseOrder">
    requested_at?: DateTimeFilter<"PurchaseOrder"> | Date | string
    requested_by_id?: IntFilter<"PurchaseOrder"> | number
    approved_at?: DateTimeNullableFilter<"PurchaseOrder"> | Date | string | null
    approved_by_id?: IntNullableFilter<"PurchaseOrder"> | number | null
    created_at?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updated_at?: DateTimeFilter<"PurchaseOrder"> | Date | string
  }

  export type PurchaseOrderUpsertWithWhereUniqueWithoutApproved_byInput = {
    where: PurchaseOrderWhereUniqueInput
    update: XOR<PurchaseOrderUpdateWithoutApproved_byInput, PurchaseOrderUncheckedUpdateWithoutApproved_byInput>
    create: XOR<PurchaseOrderCreateWithoutApproved_byInput, PurchaseOrderUncheckedCreateWithoutApproved_byInput>
  }

  export type PurchaseOrderUpdateWithWhereUniqueWithoutApproved_byInput = {
    where: PurchaseOrderWhereUniqueInput
    data: XOR<PurchaseOrderUpdateWithoutApproved_byInput, PurchaseOrderUncheckedUpdateWithoutApproved_byInput>
  }

  export type PurchaseOrderUpdateManyWithWhereWithoutApproved_byInput = {
    where: PurchaseOrderScalarWhereInput
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyWithoutApproved_byInput>
  }

  export type UserCreateWithoutPo_req_userInput = {
    email: string
    username: string
    password: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_active?: boolean
    is_verified?: boolean
    role?: $Enums.UserRoles
    created_at?: Date | string
    updated_at?: Date | string
    po_app_user?: PurchaseOrderCreateNestedManyWithoutApproved_byInput
  }

  export type UserUncheckedCreateWithoutPo_req_userInput = {
    id?: number
    email: string
    username: string
    password: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_active?: boolean
    is_verified?: boolean
    role?: $Enums.UserRoles
    created_at?: Date | string
    updated_at?: Date | string
    po_app_user?: PurchaseOrderUncheckedCreateNestedManyWithoutApproved_byInput
  }

  export type UserCreateOrConnectWithoutPo_req_userInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPo_req_userInput, UserUncheckedCreateWithoutPo_req_userInput>
  }

  export type UserCreateWithoutPo_app_userInput = {
    email: string
    username: string
    password: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_active?: boolean
    is_verified?: boolean
    role?: $Enums.UserRoles
    created_at?: Date | string
    updated_at?: Date | string
    po_req_user?: PurchaseOrderCreateNestedManyWithoutRequested_byInput
  }

  export type UserUncheckedCreateWithoutPo_app_userInput = {
    id?: number
    email: string
    username: string
    password: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_active?: boolean
    is_verified?: boolean
    role?: $Enums.UserRoles
    created_at?: Date | string
    updated_at?: Date | string
    po_req_user?: PurchaseOrderUncheckedCreateNestedManyWithoutRequested_byInput
  }

  export type UserCreateOrConnectWithoutPo_app_userInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPo_app_userInput, UserUncheckedCreateWithoutPo_app_userInput>
  }

  export type POItemsCreateWithoutMaster_refInput = {
    item: $Enums.Items
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
  }

  export type POItemsUncheckedCreateWithoutMaster_refInput = {
    id?: number
    item: $Enums.Items
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
  }

  export type POItemsCreateOrConnectWithoutMaster_refInput = {
    where: POItemsWhereUniqueInput
    create: XOR<POItemsCreateWithoutMaster_refInput, POItemsUncheckedCreateWithoutMaster_refInput>
  }

  export type POItemsCreateManyMaster_refInputEnvelope = {
    data: POItemsCreateManyMaster_refInput | POItemsCreateManyMaster_refInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPo_req_userInput = {
    update: XOR<UserUpdateWithoutPo_req_userInput, UserUncheckedUpdateWithoutPo_req_userInput>
    create: XOR<UserCreateWithoutPo_req_userInput, UserUncheckedCreateWithoutPo_req_userInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPo_req_userInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPo_req_userInput, UserUncheckedUpdateWithoutPo_req_userInput>
  }

  export type UserUpdateWithoutPo_req_userInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    po_app_user?: PurchaseOrderUpdateManyWithoutApproved_byNestedInput
  }

  export type UserUncheckedUpdateWithoutPo_req_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    po_app_user?: PurchaseOrderUncheckedUpdateManyWithoutApproved_byNestedInput
  }

  export type UserUpsertWithoutPo_app_userInput = {
    update: XOR<UserUpdateWithoutPo_app_userInput, UserUncheckedUpdateWithoutPo_app_userInput>
    create: XOR<UserCreateWithoutPo_app_userInput, UserUncheckedCreateWithoutPo_app_userInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPo_app_userInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPo_app_userInput, UserUncheckedUpdateWithoutPo_app_userInput>
  }

  export type UserUpdateWithoutPo_app_userInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    po_req_user?: PurchaseOrderUpdateManyWithoutRequested_byNestedInput
  }

  export type UserUncheckedUpdateWithoutPo_app_userInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    po_req_user?: PurchaseOrderUncheckedUpdateManyWithoutRequested_byNestedInput
  }

  export type POItemsUpsertWithWhereUniqueWithoutMaster_refInput = {
    where: POItemsWhereUniqueInput
    update: XOR<POItemsUpdateWithoutMaster_refInput, POItemsUncheckedUpdateWithoutMaster_refInput>
    create: XOR<POItemsCreateWithoutMaster_refInput, POItemsUncheckedCreateWithoutMaster_refInput>
  }

  export type POItemsUpdateWithWhereUniqueWithoutMaster_refInput = {
    where: POItemsWhereUniqueInput
    data: XOR<POItemsUpdateWithoutMaster_refInput, POItemsUncheckedUpdateWithoutMaster_refInput>
  }

  export type POItemsUpdateManyWithWhereWithoutMaster_refInput = {
    where: POItemsScalarWhereInput
    data: XOR<POItemsUpdateManyMutationInput, POItemsUncheckedUpdateManyWithoutMaster_refInput>
  }

  export type POItemsScalarWhereInput = {
    AND?: POItemsScalarWhereInput | POItemsScalarWhereInput[]
    OR?: POItemsScalarWhereInput[]
    NOT?: POItemsScalarWhereInput | POItemsScalarWhereInput[]
    id?: IntFilter<"POItems"> | number
    master_ref_id?: IntFilter<"POItems"> | number
    item?: EnumItemsFilter<"POItems"> | $Enums.Items
    quantity?: IntFilter<"POItems"> | number
    rate?: DecimalFilter<"POItems"> | Decimal | DecimalJsLike | number | string
  }

  export type PurchaseOrderCreateWithoutPoitemsInput = {
    po_number?: string
    vendor: string
    vendor_address?: string | null
    status?: $Enums.PurchaseStatus
    payment_mode: $Enums.PaymentModes
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_reference: string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: Date | string
    approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    requested_by: UserCreateNestedOneWithoutPo_req_userInput
    approved_by?: UserCreateNestedOneWithoutPo_app_userInput
  }

  export type PurchaseOrderUncheckedCreateWithoutPoitemsInput = {
    id?: number
    po_number?: string
    vendor: string
    vendor_address?: string | null
    status?: $Enums.PurchaseStatus
    payment_mode: $Enums.PaymentModes
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_reference: string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: Date | string
    requested_by_id: number
    approved_at?: Date | string | null
    approved_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PurchaseOrderCreateOrConnectWithoutPoitemsInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutPoitemsInput, PurchaseOrderUncheckedCreateWithoutPoitemsInput>
  }

  export type PurchaseOrderUpsertWithoutPoitemsInput = {
    update: XOR<PurchaseOrderUpdateWithoutPoitemsInput, PurchaseOrderUncheckedUpdateWithoutPoitemsInput>
    create: XOR<PurchaseOrderCreateWithoutPoitemsInput, PurchaseOrderUncheckedCreateWithoutPoitemsInput>
    where?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderUpdateToOneWithWhereWithoutPoitemsInput = {
    where?: PurchaseOrderWhereInput
    data: XOR<PurchaseOrderUpdateWithoutPoitemsInput, PurchaseOrderUncheckedUpdateWithoutPoitemsInput>
  }

  export type PurchaseOrderUpdateWithoutPoitemsInput = {
    po_number?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    vendor_address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFieldUpdateOperationsInput | $Enums.PaymentModes
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFieldUpdateOperationsInput | string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requested_by?: UserUpdateOneRequiredWithoutPo_req_userNestedInput
    approved_by?: UserUpdateOneWithoutPo_app_userNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutPoitemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    po_number?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    vendor_address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFieldUpdateOperationsInput | $Enums.PaymentModes
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFieldUpdateOperationsInput | string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requested_by_id?: IntFieldUpdateOperationsInput | number
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderCreateManyRequested_byInput = {
    id?: number
    po_number?: string
    vendor: string
    vendor_address?: string | null
    status?: $Enums.PurchaseStatus
    payment_mode: $Enums.PaymentModes
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_reference: string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: Date | string
    approved_at?: Date | string | null
    approved_by_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PurchaseOrderCreateManyApproved_byInput = {
    id?: number
    po_number?: string
    vendor: string
    vendor_address?: string | null
    status?: $Enums.PurchaseStatus
    payment_mode: $Enums.PaymentModes
    payment_amount: Decimal | DecimalJsLike | number | string
    payment_reference: string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: Date | string
    requested_by_id: number
    approved_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PurchaseOrderUpdateWithoutRequested_byInput = {
    po_number?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    vendor_address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFieldUpdateOperationsInput | $Enums.PaymentModes
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFieldUpdateOperationsInput | string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_by?: UserUpdateOneWithoutPo_app_userNestedInput
    poitems?: POItemsUpdateManyWithoutMaster_refNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutRequested_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    po_number?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    vendor_address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFieldUpdateOperationsInput | $Enums.PaymentModes
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFieldUpdateOperationsInput | string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    poitems?: POItemsUncheckedUpdateManyWithoutMaster_refNestedInput
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutRequested_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    po_number?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    vendor_address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFieldUpdateOperationsInput | $Enums.PaymentModes
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFieldUpdateOperationsInput | string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderUpdateWithoutApproved_byInput = {
    po_number?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    vendor_address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFieldUpdateOperationsInput | $Enums.PaymentModes
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFieldUpdateOperationsInput | string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requested_by?: UserUpdateOneRequiredWithoutPo_req_userNestedInput
    poitems?: POItemsUpdateManyWithoutMaster_refNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutApproved_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    po_number?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    vendor_address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFieldUpdateOperationsInput | $Enums.PaymentModes
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFieldUpdateOperationsInput | string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requested_by_id?: IntFieldUpdateOperationsInput | number
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    poitems?: POItemsUncheckedUpdateManyWithoutMaster_refNestedInput
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutApproved_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    po_number?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    vendor_address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPurchaseStatusFieldUpdateOperationsInput | $Enums.PurchaseStatus
    payment_mode?: EnumPaymentModesFieldUpdateOperationsInput | $Enums.PaymentModes
    payment_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_reference?: StringFieldUpdateOperationsInput | string
    additional_details?: NullableJsonNullValueInput | InputJsonValue
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    requested_by_id?: IntFieldUpdateOperationsInput | number
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POItemsCreateManyMaster_refInput = {
    id?: number
    item: $Enums.Items
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
  }

  export type POItemsUpdateWithoutMaster_refInput = {
    item?: EnumItemsFieldUpdateOperationsInput | $Enums.Items
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type POItemsUncheckedUpdateWithoutMaster_refInput = {
    id?: IntFieldUpdateOperationsInput | number
    item?: EnumItemsFieldUpdateOperationsInput | $Enums.Items
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type POItemsUncheckedUpdateManyWithoutMaster_refInput = {
    id?: IntFieldUpdateOperationsInput | number
    item?: EnumItemsFieldUpdateOperationsInput | $Enums.Items
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}