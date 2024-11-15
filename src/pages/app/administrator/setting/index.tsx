import { useTheme } from "@/components/theme-provider";
import { Switch } from "@/components/ui/switch";

export function Setting() {
  const { setTheme } = useTheme();
  return (
    <main className="container max-w-full w-full">
      <h2 className="text-2xl font-semibold">Configurações</h2>

      {/* <FormField
        control={form.control}
        name="config.filter"
        defaultValue={form.watch("config.filter")}
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
            <div className="space-y-0.5">
              <FormLabel>Usar no filtro</FormLabel>
              <FormDescription>
                Usar este campo para filtrar os dados?
              </FormDescription>
            </div>
            <FormControl>
              <div className="inline-flex space-x-2">
                <span className="text-sm">Não</span>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-readonly
                />
                <span className="text-sm">Sim</span>
              </div>
            </FormControl>
          </FormItem>
        )}
      /> */}

      <section className="flex flex-row items-center justify-between rounded-lg border p-3">
        <div className="space-y-0.5 flex flex-col">
          <span className="font-semibold">Tema do Sistema</span>
          <span>Configure o tema do sistema</span>
        </div>
        <div>
          <div className="inline-flex space-x-2">
            <span className="text-sm">Light</span>
            <Switch
              // checked={field.value}
              // onCheckedChange={field.onChange}
              onCheckedChange={(value) => setTheme(value ? "dark" : "light")}
              aria-readonly
            />
            <span className="text-sm">Dark</span>
          </div>
        </div>
      </section>
    </main>
  );
}
