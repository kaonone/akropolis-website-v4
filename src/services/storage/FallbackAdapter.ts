import { StorageAdapter } from './types';

class FallbackAdapter implements StorageAdapter {
  private state: Record<string, string> = {};

  // eslint-disable-next-line class-methods-use-this
  public checkAvailability() {
    return true;
  }

  public setItem(key: string, value: string): void {
    this.state[key] = value;
  }

  public getItem(key: string): string {
    return this.state[key];
  }

  public removeItem(key: string): void {
    delete this.state[key];
  }

  public getAllKeys(): string[] {
    return Object.keys(this.state);
  }
}

export { FallbackAdapter };
