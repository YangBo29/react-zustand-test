/**
 * author : yangbo
 * date : 2024/07/05 16:17:35
 * fileName: loadModels.js
 * description : 批量引入空间
 **/
export const loadModels = (requireContext, app) => {
    requireContext.keys().forEach(key => {
        const model = requireContext(key).default;
        app.model(model);
    });
};
