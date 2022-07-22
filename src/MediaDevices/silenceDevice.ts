function silenceDevice(this: MediaDevices, emulatorDeviceId: string) {
    const deviceMeta = this.meta?.[emulatorDeviceId];

    if (!deviceMeta) {
        return false;
    }

    deviceMeta.silent = true;

    deviceMeta.eventTarget.dispatchEvent(new Event('toggleSilence'));

    return true;
}

MediaDevices.prototype.silenceDevice = silenceDevice;

export {};
