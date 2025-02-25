import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CertificationCardProps } from "@/types/components"

const CertificationCard = ({ imageSrc, name, description, badgeLink, date }: CertificationCardProps) => {
    return (
        <Card className="bg-background/40 flex flex-col justify-between border border-border shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
            <CardContent className="p-6 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                    <Image
                        src={imageSrc || "/placeholder.svg"}
                        alt={name}
                        width={64}
                        height={64}
                        className="rounded-lg shadow-md"
                    />
                    <div>
                        <h3 className="text-lg font-bold text-primary">{name}</h3>
                        <p className="text-sm text-muted-foreground">{date}</p>
                    </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
            </CardContent>
            {badgeLink && (
                <CardFooter className="p-6">
                    <Button variant="outline" size="sm" asChild className="w-full transition-transform hover:scale-105">
                        <Link href={badgeLink} target="_blank" rel="noopener noreferrer">
                            View Badge
                        </Link>
                    </Button>
                </CardFooter>
            )}
        </Card>
    )
}

export default CertificationCard
