"use client";
import React from "react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    // DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    ChartNoAxesCombined,
    CircleCheck,
    CircleHelp,
    CodeXml,
    CreditCard,
    Hammer,
    LayoutDashboard,
    Lightbulb,
    ListChecks,
    MessageSquare,
    Rocket,
    SearchCheck,
    Target,
    Waypoints
} from "lucide-react";
import Link from "next/link";
const SideBar = () => {
    return (
        <nav className="flex dark:bg-black h-screen overflow-scroll  flex-col gap-5 py-6 px-2 w-72">
            <div className="text-3xl justify-start hover:text-green-600 px-2">Hustler</div>
            <div className="flex justify-around items-center flex-col gap-8 ">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-56">
                            Your Project Name
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
                        <DropdownMenuItem className="text-green-500 font-bold  py-2 px-2">Create a New Project</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem disabled className="text-slate-500 py-2 px-2">
                            Your Project name
                        </DropdownMenuItem>
                        <DropdownMenuItem className="py-2 px-2"> Invite a Colaborator</DropdownMenuItem>
                        <DropdownMenuItem className="py-2 px-2">Manage Access</DropdownMenuItem>
                        <DropdownMenuItem className="py-2 px-2">Remane project</DropdownMenuItem>
                        <DropdownMenuItem className="py-2 px-2">Delete project</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="flex px-2 font-bold text-slate-500">Main</div>
            <Link href="/dashboard">
                <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                    <LayoutDashboard className="w-5 h-5" />
                    <span className="font-bold ">Overview</span>
                </div>
            </Link>
            <Link href="/chats">
                <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                    <MessageSquare className="w-5 h-5" />
                    <span className="font-bold ">Chats</span>
                </div>
            </Link>
            <div className="flex px-2 font-bold text-slate-500">Phases</div>
            <Link href="/identify-a-need">
                <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                    <SearchCheck className="w-5 h-5" />
                    <span className="font-bold ">Identify a need</span>
                </div>
            </Link>
            <Link href="/validate-the-need">
                <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                    <CircleCheck className="w-5 h-5" />
                    <span className="font-bold ">Validate the need</span>
                </div>
            </Link>
            <Link href="/solution">
                <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                    <Lightbulb className="w-5 h-5" />
                    <span className="font-bold ">Solution ideation</span>
                </div>
            </Link>
            <Link href="/audience-targeting">
                <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                    <Target className="w-5 h-5" />
                    <span className="font-bold ">Audience target</span>
                </div>
            </Link>
            <Link href="/market-validation">
                <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                    <ChartNoAxesCombined className="w-5 h-5" />
                    <span className="font-bold ">Market validation</span>
                </div>
            </Link>
            <Link href="/define-mvp-features">
                <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                    <ListChecks className="w-5 h-5" />
                    <span className="font-bold ">Define MVP featurs</span>
                </div>
            </Link>
            <Link href="/plan-mvp-development">
                <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                    <CodeXml className="w-5 h-5" />
                    <span className="font-bold ">Plan MVP development</span>
                </div>
            </Link>
            <Link href="/build-mvp">
                <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                    <Hammer className="w-5 h-5" />
                    <span className="font-bold ">Build MVP</span>
                </div>
            </Link>
            <Link href="/plan-mvp-launch">
                <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                    <Rocket className="w-5 h-5" />
                    <span className="font-bold ">Plan MVP launch</span>
                </div>
            </Link>
            <Link href="/post-launch-actions">
                <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                    <Waypoints className="w-5 h-5" />
                    <span className="font-bold ">Post launch actions</span>
                </div>
            </Link>
            <div className="flex px-2 font-bold text-slate-500">Other</div>
            <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                <CreditCard className="w-5 h-5" />
                <span className="font-bold ">Buy Pro</span>
            </div>
            <div className="flex px-2 gap-1 hover:text-green-600 items-center hover:bg-green-50/5" style={{ marginTop: "-0.75rem" }}>
                <CircleHelp className="w-5 h-5" />
                <span className="font-bold ">Help</span>
            </div>
        </nav>
    );
};

export default SideBar;
