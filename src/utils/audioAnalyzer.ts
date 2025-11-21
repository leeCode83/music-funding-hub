export class AudioAnalyzer {
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private dataArray: Uint8Array<ArrayBuffer> | null = null;
  private source: MediaElementAudioSourceNode | null = null;

  async initialize(audioElement: HTMLAudioElement) {
    try {
      this.audioContext = new AudioContext();
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      
      const bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(new ArrayBuffer(bufferLength));

      this.source = this.audioContext.createMediaElementSource(audioElement);
      this.source.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);

      return true;
    } catch (error) {
      console.error('Error initializing audio analyzer:', error);
      return false;
    }
  }

  getFrequencyData(): Uint8Array {
    if (!this.analyser || !this.dataArray) {
      return new Uint8Array(0);
    }
    this.analyser.getByteFrequencyData(this.dataArray);
    return this.dataArray;
  }

  cleanup() {
    if (this.source) {
      this.source.disconnect();
      this.source = null;
    }
    if (this.analyser) {
      this.analyser.disconnect();
      this.analyser = null;
    }
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    this.dataArray = null;
  }
}
