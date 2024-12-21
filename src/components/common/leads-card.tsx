import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PlusCircle } from 'lucide-react'
import type { LeadCard } from "@/config/types"

export function LeadCard({ name, role, company, description, tags }: LeadCard) {
  return (
    <Card className="w-full ">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-muted-foreground">
                  {role} • {company}
                </p>
              </div>
              <Button size="icon" variant="ghost">
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-sm">{description}</p>
            <div className="mt-2 flex gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

