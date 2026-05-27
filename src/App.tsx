import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Badge } from './components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Checkbox } from './components/ui/checkbox'
import { Switch } from './components/ui/switch'
import { Separator } from './components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">andy-b-ui</h1>
          <p className="text-muted-foreground mt-1">Shared component library — run <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">npm run storybook</code> to view docs.</p>
        </div>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Badges</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Form Controls</h2>
          <div className="grid gap-4 max-w-sm">
            <div className="grid gap-1.5">
              <Label htmlFor="demo-input">Email</Label>
              <Input id="demo-input" placeholder="you@example.com" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="demo-check" />
              <Label htmlFor="demo-check">Accept terms</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="demo-switch" />
              <Label htmlFor="demo-switch">Notifications</Label>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Card</h2>
          <Card className="max-w-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Andy Butler</CardTitle>
                  <CardDescription>Software Engineer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Building a shared component library with shadcn/ui and Storybook.</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">Follow</Button>
              <Button size="sm" variant="outline">Message</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default App
