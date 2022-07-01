declare module 'testingbot-tunnel-launcher' {
    export default function TestingBotTunnelLauncher (
        options: import("../types").TunnelLauncherOptions,
        cb: (err: Error, tunnel: import("../types").TestingbotTunnel) => void
    ): void
}

