import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
const TEST_ROUNDS = 3;

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
  const [isTesting, setIsTesting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SpeedResult | null>(null);

  const handleMeasureSpeed = async () => {
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
      setError("Đo tốc độ thất bại, bạn thử lại giúp mình nhé.");
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <Card className="portfolio-panel border-border/50">
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg md:text-xl">Công cụ đo tốc độ mạng</CardTitle>
        <p className="text-sm text-muted-foreground">
          Nhấn đo để ước lượng tốc độ tải xuống thực tế và kiểm tra chất lượng kết nối hiện tại.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <Button onClick={handleMeasureSpeed} disabled={isTesting} className="h-9 px-4 text-sm md:h-10">
          {isTesting ? "Đang đo..." : "Đo tốc độ ngay"}
        </Button>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        {result ? (
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <Badge variant="secondary" className="justify-center rounded-md px-3 py-2 text-xs md:text-sm">
              Tốc độ: {formatNumber(result.measuredMbps, 2)} Mbps
            </Badge>
            <Badge variant="secondary" className="justify-center rounded-md px-3 py-2 text-xs md:text-sm">
              RTT: {formatNumber(result.rtt, 0)} ms
            </Badge>
            <Badge variant="secondary" className="justify-center rounded-md px-3 py-2 text-xs md:text-sm">
              Kết nối: {result.effectiveType?.toUpperCase() ?? "N/A"}
            </Badge>
            <Badge variant="secondary" className="justify-center rounded-md px-3 py-2 text-xs md:text-sm">
              Data Saver: {result.saveData ? "Bật" : "Tắt"}
            </Badge>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default NetworkSpeedTool;
