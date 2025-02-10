export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      customer_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: string | null
          category_id: string | null
          company_name: string
          contact_name: string | null
          created_at: string | null
          email: string | null
          id: string
          notes: string | null
          phone: string | null
          region: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          category_id?: string | null
          company_name: string
          contact_name?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          notes?: string | null
          phone?: string | null
          region?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          category_id?: string | null
          company_name?: string
          contact_name?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          notes?: string | null
          phone?: string | null
          region?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "customer_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          created_at: string | null
          id: string
          min_stock_level: number | null
          product_code: string
          product_name: string
          quantity: number
          status: string | null
          unit: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          min_stock_level?: number | null
          product_code: string
          product_name: string
          quantity?: number
          status?: string | null
          unit: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          min_stock_level?: number | null
          product_code?: string
          product_name?: string
          quantity?: number
          status?: string | null
          unit?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          created_at: string | null
          created_by: string | null
          customer_name: string
          facility: string
          id: string
          notes: string | null
          order_number: string
          packaging: string
          product: string
          quantity: number
          shipping_region: string
          status: string | null
          total_weight: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          customer_name: string
          facility: string
          id?: string
          notes?: string | null
          order_number: string
          packaging: string
          product: string
          quantity: number
          shipping_region: string
          status?: string | null
          total_weight: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          customer_name?: string
          facility?: string
          id?: string
          notes?: string | null
          order_number?: string
          packaging?: string
          product?: string
          quantity?: number
          shipping_region?: string
          status?: string | null
          total_weight?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      product_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      production: {
        Row: {
          batch_number: string
          completed_at: string | null
          created_at: string | null
          created_by: string | null
          id: string
          notes: string | null
          product_type: string
          quantity: number
          status: string | null
        }
        Insert: {
          batch_number: string
          completed_at?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          notes?: string | null
          product_type: string
          quantity: number
          status?: string | null
        }
        Update: {
          batch_number?: string
          completed_at?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          notes?: string | null
          product_type?: string
          quantity?: number
          status?: string | null
        }
        Relationships: []
      }
      settings: {
        Row: {
          auto_stock_update: boolean | null
          company_name: string
          created_at: string | null
          critical_stock_notifications: boolean | null
          email_notifications: boolean | null
          id: string
          tax_number: string | null
          updated_at: string | null
          whatsapp_notifications: boolean | null
        }
        Insert: {
          auto_stock_update?: boolean | null
          company_name: string
          created_at?: string | null
          critical_stock_notifications?: boolean | null
          email_notifications?: boolean | null
          id?: string
          tax_number?: string | null
          updated_at?: string | null
          whatsapp_notifications?: boolean | null
        }
        Update: {
          auto_stock_update?: boolean | null
          company_name?: string
          created_at?: string | null
          critical_stock_notifications?: boolean | null
          email_notifications?: boolean | null
          id?: string
          tax_number?: string | null
          updated_at?: string | null
          whatsapp_notifications?: boolean | null
        }
        Relationships: []
      }
      shipments: {
        Row: {
          completed_date: string | null
          created_at: string | null
          driver_name: string | null
          driver_phone: string | null
          id: string
          notes: string | null
          order_id: string | null
          planned_date: string
          status: string | null
          updated_at: string | null
          vehicle_plate: string | null
        }
        Insert: {
          completed_date?: string | null
          created_at?: string | null
          driver_name?: string | null
          driver_phone?: string | null
          id?: string
          notes?: string | null
          order_id?: string | null
          planned_date: string
          status?: string | null
          updated_at?: string | null
          vehicle_plate?: string | null
        }
        Update: {
          completed_date?: string | null
          created_at?: string | null
          driver_name?: string | null
          driver_phone?: string | null
          id?: string
          notes?: string | null
          order_id?: string | null
          planned_date?: string
          status?: string | null
          updated_at?: string | null
          vehicle_plate?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_count_items: {
        Row: {
          counted_quantity: number
          created_at: string | null
          difference: number | null
          id: string
          notes: string | null
          previous_quantity: number | null
          product_code: string
          stock_count_id: string | null
        }
        Insert: {
          counted_quantity: number
          created_at?: string | null
          difference?: number | null
          id?: string
          notes?: string | null
          previous_quantity?: number | null
          product_code: string
          stock_count_id?: string | null
        }
        Update: {
          counted_quantity?: number
          created_at?: string | null
          difference?: number | null
          id?: string
          notes?: string | null
          previous_quantity?: number | null
          product_code?: string
          stock_count_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "stock_count_items_stock_count_id_fkey"
            columns: ["stock_count_id"]
            isOneToOne: false
            referencedRelation: "stock_counts"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_counts: {
        Row: {
          completed_at: string | null
          count_number: string
          created_at: string | null
          id: string
          notes: string | null
          personnel: string
          status: string | null
        }
        Insert: {
          completed_at?: string | null
          count_number: string
          created_at?: string | null
          id?: string
          notes?: string | null
          personnel: string
          status?: string | null
        }
        Update: {
          completed_at?: string | null
          count_number?: string
          created_at?: string | null
          id?: string
          notes?: string | null
          personnel?: string
          status?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
