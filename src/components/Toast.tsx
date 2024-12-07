import { useToast } from "@/hooks/use-toast.ts";
import { Button } from "@/components/ui/button.tsx";

function Toast() {
    const { toast } = useToast()

    return (
        <Button
            variant="default"
            onClick={() => {
                toast({
                    title: "Scheduled: Catch up",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                })
            }}
        >
            Show Toast
        </Button>
    )
}

export default Toast
