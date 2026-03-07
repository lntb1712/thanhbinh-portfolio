import { useCallback, useEffect, useRef, useState } from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
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
const MAX_POINTS = 8;

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
  const [collapsed, setCollapsed] = useState(false);
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
    <Card className="portfolio-panel fixed bottom-3 left-3 z-50 w-[165px] border-border/60 bg-background/85 shadow-lg backdrop-blur-xl sm:bottom-4 sm:left-4 sm:w-[190px]">
      <CardContent className="p-2.5">
        <div className="mb-1 flex items-center justify-between gap-2">
          <p className="text-[9px] font-semibold tracking-[0.08em] text-muted-foreground">NET</p>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2 text-[10px]"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            {collapsed ? "Hiện" : "Ẩn"}
          </Button>
        </div>

        <p className="text-sm font-semibold text-foreground">{formatSpeed(result?.measuredMbps)} Mbps</p>

        {!collapsed ? (
          <ChartContainer config={chartConfig} className="mt-1.5 h-14 w-full">
            <LineChart data={history} margin={{ top: 6, right: 2, left: -24, bottom: 0 }}>
              <XAxis dataKey="time" hide />
              <YAxis hide domain={[0, "auto"]} />
              <Line
                type="monotone"
                dataKey="speed"
                stroke="var(--color-speed)"
                strokeWidth={1.5}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ChartContainer>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default NetworkSpeedTool;
