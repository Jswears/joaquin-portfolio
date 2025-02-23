import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CertificationCardProps } from "@/types"


const CertificationCard = ({ imageSrc, name, description, badgeLink, date }: CertificationCardProps) => {
    return (
        <Card className="bg-transparent border shadow-2xl">
            <CardContent className="p-4">
                <div className="flex items-center mb-4">
                    <Image src={imageSrc || "/placeholder.svg"} alt={name} width={64} height={64} className="rounded-full" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold font-montserrat">{name}</h3>
                        <p className="text-sm text-muted-foreground font-ibm-plex-mono">{date}</p>
                    </div>
                </div>
                <p className="text-sm mb-4 font-ibm-plex-mono">{description}</p>
            </CardContent>
            {badgeLink && (
                <CardFooter>
                    <Button variant="outline" size="sm" asChild className="w-full">
                        <Link href={badgeLink} target="_blank" rel="noopener noreferrer">
                            View Badge
                        </Link>
                    </Button>
                </CardFooter>
            )}
        </Card>
    )
}

export default CertificationCard;

