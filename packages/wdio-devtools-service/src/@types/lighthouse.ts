declare module 'lighthouse' {}
declare module 'lighthouse/lighthouse-core/gather/driver.js' {
    export default class Driver {
        constructor (cdpConnection: any)
        beginTrace (): any
        endTrace (): any
        evaluate: any
    }
}
declare module 'lighthouse/lighthouse-core/gather/connections/cri.js' {
    export default class Cri {
        constructor (port: string, hostname: string)
        sendCommand (method: string, sessionId?: string | undefined, ...paramArgs: any[]): any
        _connectToSocket (param: any): any
        _runJsonCommand (param: string): any
    }
}
declare module 'lighthouse/lighthouse-core/gather/gather-runner.js' {}
declare module 'lighthouse/lighthouse-core/fraggle-rock/gather/session.js' {}
declare module 'lighthouse/lighthouse-core/gather/connections/raw.js' {}
declare module 'lighthouse/lighthouse-core/gather/gatherers/installability-errors.js' {}
declare module 'lighthouse/lighthouse-core/gather/gatherers/web-app-manifest.js' {}
declare module 'lighthouse/lighthouse-core/gather/gatherers/link-elements.js' {}
declare module 'lighthouse/lighthouse-core/gather/gatherers/viewport-dimensions.js' {}
declare module 'lighthouse/lighthouse-core/lib/page-functions.js' {}
declare module 'lighthouse/lighthouse-core/lib/network-recorder.js' {}
declare module 'lighthouse/lighthouse-core/audits/diagnostics.js' {}
declare module 'lighthouse/lighthouse-core/audits/mainthread-work-breakdown.js' {}
declare module 'lighthouse/lighthouse-core/audits/metrics.js' {}
declare module 'lighthouse/lighthouse-core/audits/server-response-time.js' {}
declare module 'lighthouse/lighthouse-core/audits/metrics/cumulative-layout-shift.js' {}
declare module 'lighthouse/lighthouse-core/audits/metrics/first-contentful-paint.js' {}
declare module 'lighthouse/lighthouse-core/audits/metrics/largest-contentful-paint.js' {}
declare module 'lighthouse/lighthouse-core/audits/metrics/speed-index.js' {}
declare module 'lighthouse/lighthouse-core/audits/metrics/interactive.js' {}
declare module 'lighthouse/lighthouse-core/audits/metrics/total-blocking-time.js' {}
declare module 'lighthouse/lighthouse-core/audits/installable-manifest.js' {}
declare module 'lighthouse/lighthouse-core/audits/service-worker.js' {}
declare module 'lighthouse/lighthouse-core/audits/splash-screen.js' {}
declare module 'lighthouse/lighthouse-core/audits/themed-omnibox.js' {}
declare module 'lighthouse/lighthouse-core/audits/content-width.js' {}
declare module 'lighthouse/lighthouse-core/audits/viewport.js' {}
declare module 'lighthouse/lighthouse-core/audits/apple-touch-icon.js' {}
declare module 'lighthouse/lighthouse-core/audits/maskable-icon.js' {}
declare module 'lighthouse/lighthouse-core/scoring.js' {
    export const arithmeticMean: any
}
declare module 'lighthouse/lighthouse-core/config/default-config.js' {}
declare module 'lighthouse/lighthouse-core/config/constants.js' {
    export const throttling: any
}
declare module 'lighthouse/lighthouse-core/gather/driver/wait-for-condition.js' {
    export const waitForFullyLoaded: any
}
declare module 'lighthouse/lighthouse-core/gather/driver/network-monitor.js' {}
declare module 'lighthouse/lighthouse-core/gather/driver/service-workers.js' {}
