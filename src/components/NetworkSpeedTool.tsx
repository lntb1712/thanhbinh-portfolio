import { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type ConnectionInfo = {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
};

type SpeedResult = ConnectionInfo & {
  measuredMbps?: number;
};

const TEST_FILE_URL = "/LeNguyenThanhBinh_Backend.pdf";
const TEST_ROUNDS = 2;
const MEASURE_INTERVAL_MS = 15000;

const getConnectionInfo = (): ConnectionInfo => {
  const nav = navigator as Navigator & {
    connection?: ConnectionInfo;
    mozConnection?: ConnectionInfo;
    webkitConnection?: ConnectionInfo;
  };

  return nav.connection ?? nav.mozConnection ?? nav.webkitConnection ?? {};
};

const formatNumber = (value?: number, digits = 1) => {
  if (typeof value !== "number" || Number.isNaN(value)) return "N/A";
  return value.toFixed(digits);
};

const NetworkSpeedTool = () => {
  const [isTesting, setIsTesting] = useState(true);
  const [result, setResult] = useState<SpeedResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const measuringRef = useRef(false);

  const measureSpeed = useCallback(async () => {
    if (measuringRef.current) return;

    measuringRef.current = true;
    setIsTesting(true);
    setError(null);

    try {
      let totalBytes = 0;
      const startedAt = performance.now();

      for (let i = 0; i < TEST_ROUNDS; i += 1) {
        const response = await fetch(`${TEST_FILE_URL}?measure=${Date.now()}-${i}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Không thể tải file test.");
        }

        const fileBlob = await response.blob();
        totalBytes += fileBlob.size;
      }

      const elapsedSeconds = (performance.now() - startedAt) / 1000;
      const measuredMbps = elapsedSeconds > 0 ? (totalBytes * 8) / (elapsedSeconds * 1_000_000) : 0;

      setResult({
        measuredMbps,
        ...getConnectionInfo(),
      });
    } catch {
      setError("Đang chờ mạng ổn định...");
    } finally {
      measuringRef.current = false;
      setIsTesting(false);
    }
  }, []);

  useEffect(() => {
    void measureSpeed();
    const timer = window.setInterval(() => {
      void measureSpeed();
    }, MEASURE_INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [measureSpeed]);

  return (
    <Card className="portfolio-panel fixed bottom-4 left-3 z-50 w-[180px] border-border/60 bg-background/85 shadow-lg backdrop-blur-xl sm:bottom-5 sm:left-5 sm:w-[210px]">
      <CardContent className="space-y-1.5 p-3">
        <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">NETWORK MONITOR</p>
        <p className="text-sm font-semibold text-foreground">{formatNumber(result?.measuredMbps, 2)} Mbps</p>
        <div className="space-y-1 text-[11px] text-muted-foreground">
          <p>RTT: {formatNumber(result?.rtt, 0)} ms</p>
          <p>{result?.effectiveType?.toUpperCase() ?? "N/A"}</p>
          <p>{isTesting ? "Đang đo..." : error ?? "Tự động cập nhật 15s"}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetworkSpeedTool;
