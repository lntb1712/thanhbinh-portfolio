import { useCallback, useEffect, useRef, useState } from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

type ConnectionInfo = {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
};

type SpeedResult = ConnectionInfo & {
  measuredMbps?: number;
};

type SpeedPoint = {
  time: string;
  speed: number;
};

const TEST_FILE_URL = "/LeNguyenThanhBinh_Backend.pdf";
const TEST_ROUNDS = 2;
const MEASURE_INTERVAL_MS = 15000;
const MAX_POINTS = 14;

const chartConfig = {
  speed: {
    label: "Mbps",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const formatSpeed = (value?: number) => {
  if (typeof value !== "number" || Number.isNaN(value)) return "--";
  return value.toFixed(2);
};

const getConnectionInfo = (): ConnectionInfo => {
  const nav = navigator as Navigator & {
    connection?: ConnectionInfo;
    mozConnection?: ConnectionInfo;
    webkitConnection?: ConnectionInfo;
  };

  return nav.connection ?? nav.mozConnection ?? nav.webkitConnection ?? {};
};

const NetworkSpeedTool = () => {
  const [result, setResult] = useState<SpeedResult | null>(null);
  const [history, setHistory] = useState<SpeedPoint[]>([]);
  const measuringRef = useRef(false);

  const measureSpeed = useCallback(async () => {
    if (measuringRef.current) return;

    measuringRef.current = true;

    try {
      let totalBytes = 0;
      const startedAt = performance.now();

      for (let i = 0; i < TEST_ROUNDS; i += 1) {
        const response = await fetch(`${TEST_FILE_URL}?measure=${Date.now()}-${i}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Cannot fetch test file");
        }

        const fileBlob = await response.blob();
        totalBytes += fileBlob.size;
      }

      const elapsedSeconds = (performance.now() - startedAt) / 1000;
      const measuredMbps = elapsedSeconds > 0 ? (totalBytes * 8) / (elapsedSeconds * 1_000_000) : 0;
      const now = new Date();

      setResult({
        measuredMbps,
        ...getConnectionInfo(),
      });

      setHistory((prev) => {
        const nextPoint: SpeedPoint = {
          time: now.toLocaleTimeString("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          speed: Number(measuredMbps.toFixed(2)),
        };

        const next = [...prev, nextPoint];
        return next.slice(-MAX_POINTS);
      });
    } finally {
      measuringRef.current = false;
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
    <Card className="portfolio-panel fixed bottom-4 left-3 z-50 w-[220px] border-border/60 bg-background/85 shadow-lg backdrop-blur-xl sm:bottom-5 sm:left-5 sm:w-[260px]">
      <CardContent className="space-y-2 p-3">
        <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground">NETWORK MONITOR</p>
        <p className="text-base font-semibold text-foreground">{formatSpeed(result?.measuredMbps)} Mbps</p>

        <ChartContainer config={chartConfig} className="h-20 w-full">
          <LineChart data={history} margin={{ top: 6, right: 4, left: -20, bottom: 0 }}>
            <XAxis dataKey="time" hide />
            <YAxis hide domain={[0, "auto"]} />
            <Line
              type="monotone"
              dataKey="speed"
              stroke="var(--color-speed)"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default NetworkSpeedTool;
