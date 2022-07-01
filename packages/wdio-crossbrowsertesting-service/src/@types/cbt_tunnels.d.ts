declare module 'cbt_tunnels' {
    export interface CBTConfigInterface {
        username?: string,
        authkey?: string,
        nokill?: boolean,
    }

    export function start (config: CBTConfigInterface, callback: (err: Error | null) => void): void
    export function stop (callback: Function): void
}
