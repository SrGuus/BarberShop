import { CardContent } from "./ui/card";
import { Card } from = "./ui/card";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <Card>
            <CardContent>
                <Image src="/logo.png" alt="FSW Barber" height = {22} width = {120}/>
                <Button variant="outline" size="icon">
                    <MenuIcon/>
                </Button>
            </CardContent>
        </Card>
    );
}
 
export default Header;