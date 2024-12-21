import {
  BarChart3,
  BookOpen,
  Building2,
  Contact2,
  FileSpreadsheet,
  FolderOpen,
  GanttChartSquare,
  Home,
  ListTodo,
  Mail,
  Package,
  PieChart,
  Quote,
  Receipt,
  ScanLine,
  ScrollText,
  ShoppingCart,
  Users2,
} from "lucide-react";

export interface NavItem {
  title: string;
  icon?: any;
  items?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    icon: Home,
  },
  {
    title: "Recent",
    icon: FolderOpen,
    items: [],
  },
  {
    title: "Pinned",
    icon: ListTodo,
  },
  {
    title: "My work",
    items: [
      {
        title: "Sales accelerator",
        icon: BarChart3,
      },
      {
        title: "Dashboards",
        icon: PieChart,
      },
      {
        title: "Activities",
        icon: GanttChartSquare,
      },
    ],
  },
  {
    title: "Customers",
    items: [
      {
        title: "Accounts",
        icon: Building2,
      },
      {
        title: "Contacts",
        icon: Contact2,
      },
    ],
  },
  {
    title: "Sales",
    items: [
      {
        title: "Leads",
        icon: Users2,
      },
      {
        title: "Opportunities",
        icon: FileSpreadsheet,
      },
      {
        title: "Competitors",
        icon: Users2,
      },
    ],
  },
  {
    title: "Collateral",
    items: [
      {
        title: "Quotes",
        icon: Quote,
      },
      {
        title: "Orders",
        icon: ShoppingCart,
      },
      {
        title: "Invoices",
        icon: Receipt,
      },
      {
        title: "Products",
        icon: Package,
      },
      {
        title: "Sales Literature",
        icon: BookOpen,
      },
    ],
  },
  {
    title: "Marketing",
    items: [
      {
        title: "Marketing lists",
        icon: ScrollText,
      },
      {
        title: "Quick Campaigns",
        icon: Mail,
      },
    ],
  },
  {
    title: "Performance",
    icon: BarChart3,
    items: [],
  },
  {
    title: "Agent skill",
    icon: ScanLine,
    items: [],
  },
];
